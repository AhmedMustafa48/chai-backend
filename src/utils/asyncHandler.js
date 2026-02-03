const asyncHandler = (requestHandler) =>{
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(err => next(err));
    }
}

export { asyncHandler };

// higher order function because fn is a function which is passed as argument

// const asyncHandler = () => {};
// const asyncHandler = () => () => {};
// xconst asyncHandler = () => async() => {};

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message || "Internal Server Error",
//     });
//   }
// };


// this above function is in top with promises