// npm init --y
// npm i express --save

/* //TODO: create server.js: 
 require express
  and create app from express
  and listen to port
  create simple route to check
  up app by nodemon => nodemon server
  or handle it in package.js => "script":{"dev":"nodemon server.js"} and write >npm run dev
*/

/* //TODO:  create config.env and add: >npm i dotenv
  PORT=8000
  NODE_ENV=development
  in server => require dotenv and config, use it
 */

/* //TODO: create gitIgnore file: 
 node_modules/
  config.env
*/

/* //TODO: make logger to hhtp req by meddleware : morgan علشان يفيدني وانا شغال اشوف الحالة بتعتي
1.npm i morgan
  2.require it
  3.call it as middleware before routes in development mode
*/

/* //TODO: mongoDB Atlas & compass
 1.create cluster in atlas
  2.go to collection in cluster and create one
  3.go to database access => add new user and create username, password and in db user privileges => read and write to any db - then take username, password and db_user in config.env
  4.go to network access => 0.0.0.0/0
  4.connect to cluster by mongo compase to link and past it in compas connection

*/

/* //TODO: connect app with mongodb by mongoose in config/databse.js
 npm i mongoose
  require
  connect with db and take link from mongo atlas => connect by application and put link in env
*/

// create schema, create model and create route - in models/categoryModel.js
// make middelware for parsing

/* //HEADLINE: CRUD for Category
TODO: make CRUD Operation for Categories
in categoryModel.js: handle schema - and slug: a and b => لو في مسافات في اليوارال يعوضها ب - ولو هي كابيتال تبقي اسمول
  in categoryController.js update getCategory and work with anther way: category.create({name, sluge})
  and use npm i slugify and require it
  and update in route from router.post("/", getCategories); to router.route("/").get(getC)
  ملحوظة : change from then and catch ==> to async and await
TODO:  go to postman
create collection
  and add post handle http

like:
exports.deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await CategoryModel.findOneAndDelete(id);
  if (!category) {
    res.status(404).json({ msg: `No Category for this id ${id}` });
  }
  res.status(204).send();
});
*/

/* //HEADLINE:  ways to handle errors:
TODO: 1.then/catch:
CategoryModel.create({ name, slug: slugify(name) })
    .then((category) =>res.status(201).json({ data: category }) )
    .catch((err) => {
    res.status(400).send(err);
    });

TODO: 2.try/catch:
try {
    const category = await CategoryModel.create({ name, slug: slugify(name) });
    res.status(201).json({ data: category });
    } catch (err) {
    res.status(400).send(err);
    }

TODO: 3.best case:
npm install express-async-handler
    require it
    exports.createCategory = asyncHandler(async (req, res) => {
    const name = req.body.name;
    const category = await CategoryModel.create({ name, slug: slugify(name) });
    res.status(201).json({ data: category });
    });
*/

/* //TODO: create docs for code
 @desc  
  @route
  @access
*/

// Handle get all category from db
// Then make pagenation => ?page=1&limit=1 => in categouryController.js
// getSpecificCategory method & create it in categoryRoute & save in postman
// update category method & create it in categoryRoute & save in postman
// delete category method & create it in categoryRoute & save in postman

/* //HEADLINE: error handler
TODO: Catch Errors from Express using Error Handling Middleware
  ميدل وير بتمسك الايرور اللي جيلي من الاكسبرس وارجعو بالهاياه اللي عايزها
  app.use((err, req, res, next) => {
  res.status(400).send("Something went wrong");
  next();
  });

TODO: يدخل في الميدل وير لو مدخلش في الايندبوينت اللي معرفهم
  app.all('\*',(req,res,next)=>{
  //create error and send it to error handling middleware
  const err = new Error(`can't find this route: ${req,originalUrl}`)
  next(err.message)
  })

$ best practise:
TODO Reusable Error => بدل مكل مرة اكريت الايرور - اعمل كومبوننت عندي واستدعية زي منا عايز
  *create utils/apiError.js: create class
  *in middlware/errorMw.js => global error handling middlware

  require apiError and errorMw in server.js:
  app.all("\*", (req, res, next) => {
  next(new ApiError("message", statusCode));
  });
  app.use(globalError);


*/

/* //TODO: Refactor 404 not found
in controller/categoryController.js:
exports.getSpecificCategoryById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const category = await CategoryModel.findById(id);
  if (!category) {
    // res.status(404).json({ msg: `No Category for this id ${id}` });
    return next(new ApiError(`No Category for this id ${id}`, 404));
  }
  res.status(200).json({ data: category });
});

*/

/* //HEADLINE: Handle Errors in development and Production ENV Mode
wite func for dev and func for prod and write if statment
handle prod mode => go to package.js to "scripts":{
  "start:dev":"nodemon server.js",
  "start:prod": "NODE_ENV=production node server.js"
}
>npm run start:prod
*/

/* //TODO: handle errors outside express
 * listen for eny event ulhandled rejection like in mongodb
in server.js:
process.on("unhandledRejection", (err) => {});
 */

/* //HEADLINE : VALIDATION 
add validation middleware after route 
 علشان الداتا بيز متستقبلش الف ريكوست اعمل فالديشن قبل ميدخل علي البيزنيس لوجيك بتاعي (كونترولر)
$ فايدة الفالديشن اني اكتش الايرور بدري
* express-validator
>npm i --save express-validator

1.add ruls => utils/validator/categoryValidator.js => require check and validatorMiddleware.js
2.middleware to catch errors from rules if exist => in vaildatorMiddleware.js => require validationResult
3.and require from util to route
*/

//-------------------------

/* //HEADLINE: Sub Categoury and Brands
 * models/subCategoryModel.js:
require mongoose
create schema and add definishn timestamps
 */
