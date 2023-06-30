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

/* // TODO: add Eslint => علشان يكتشف الاخطاء البسيطة
// 1- Install these packages in your dev dependencies using this command:

npm i -D eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-prettier eslint-plugin-react prettier


// 2- Create ".eslintrc.json" file in the root directory with these configration: 

{
  "extends": ["airbnb", "prettier", "plugin:node/recommended"],
  "plugins": ["prettier"],
  "rules": {
    // "prettier/prettier": "error",
    "spaced-comment": "off",
    "no-console": "off",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "no-undef": "warn",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-unused-vars": ["warn", { "argsIgnorePattern": "req|res|next|val" }]
  }
}
 */

/* //HEADLINE: Sub Categoury and Brands
 * models/subCategoryModel.js:
-require mongoose
-create schema and add requirement, slug and timestamps and make it child => ref
- in controleers/subCategoryController.js : 
require slugify, express-async-handler, utils/apiError and subCategory
add craete subCategory
- in route/subCategoryRoute.js:
require express, createSubCategory from controler
const router = express.Router();
router.route("/").post(createSubCategory);
- create validation
- require it in subCategoryRoute.js
- mount it in server.js
- test it in postman : create new folder for subCategory
- then get , getspicifc , update and delete
$ make population : اني ارجع الاب باسمة مع الابن مش بالاي دي
in controllers/subCategoryController.js => .populate({path: "category", select: 'name'});
.populate({path: "category", select: 'name -_id'}); => معناه كدا بقولة شيلي الايدي

$ Nested Route : access route from anther route
* اي حاجة بيرنت وليها ابناء
*list of subcategory - give him categoryId and give me list
*GET  /api/categories/:categoryId/subCategories   => هاتلي الساب كاتيجوري اللي تنتمي للكاتجوري الفلاني
- in routes/categoryRoute.js:
const subCategoriesRoute = require("./subCategoryRoute");
router.use("/:categoryId/subCategories", subCategoriesRoute)
-in subCategoryRoute.js:
* mergeParams: allow us to access parameters on other routers
ex: we need to access categoryId from category router
const router = express.Router({mergeParams: true});
and make logic in controllerss/subCategoryController.js: in getSubCategory method
create it like middleware => exports.createFiterObject

-create subcategory on category:
in subcategorycontroller.js: create it like middleware
exports.setCategoryIdToBody 
if didnt have category in body catch it from params.categoryId
and add it after validation

- CRUD Operation for Brands
 */
