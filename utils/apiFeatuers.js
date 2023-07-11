class ApiFeatures {
  constructor(mongooseQuery, queryString) {
    this.mongooseQuery = mongooseQuery;
    this.queryString = queryString;
  }

  filter() {
    const queryStringObj = { ...this.queryString };
    const excludFilds = ["page", "limit", "fields", "sort"];
    excludFilds.forEach((field) => delete queryStringObj[field]);
    // applay filteration using [gte, gt, lte, lt]
    let queryStr = JSON.stringify(queryStringObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    this.mongooseQuery = this.mongooseQuery.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      // price, -sold =>      [price, -sold]  price -sold
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.mongooseQuery = this.mongooseQuery.sort(sortBy);
    } else {
      this.mongooseQuery = this.mongooseQuery.sort("-createdAt");
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.mongooseQuery = this.mongooseQuery.select(fields);
    } else {
      this.mongooseQuery = this.mongooseQuery.select("-__v");
    }
    return this;
  }

  // search(modelName) {
  //   if (this.queryString.keyword) {
  //     let query = {};
  //     if (modelName === "Products") {
  //       query.$or = [
  //         { title: { $regex: this.queryString.keyword, $options: "i" } },
  //         { description: { $regex: this.queryString.keyword, $options: "i" } },
  //       ];
  //     } else {
  //       query = { name: { $regex: this.queryString.keyword, $options: "i" } };
  //     }

  //     this.mongooseQuery = this.mongooseQuery.find(query);
  //   }
  //   return this;
  // }

  search(modelName) {
    if (this.queryString.keyword) {
      let query = {};
      if (modelName === "Products") {
        query.$or = [
          { title: { $regex: new RegExp(this.queryString.keyword, "i") } },
          {
            description: { $regex: new RegExp(this.queryString.keyword, "i") },
          },
        ];
      } else {
        query = { name: { $regex: new RegExp(this.queryString.keyword, "i") } };
      }
      this.mongooseQuery = this.mongooseQuery.find(query);
    }
    return this;
  }

  paginate(countDocuments) {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 50;
    const skip = (page - 1) * limit;
    const endIndex = page * limit;

    // pagination results
    const pagination = {};
    pagination.currentPage = page;
    pagination.limit = limit;
    pagination.numberOfPages = Math.ceil(countDocuments / limit); // 50/10=5

    // next page
    if (endIndex < countDocuments)
      this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);

    // prev page
    if (skip > 0) pagination.prev = page - 1;

    this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);

    this.paginationResult = pagination;

    return this;
  }
}

module.exports = ApiFeatures;
