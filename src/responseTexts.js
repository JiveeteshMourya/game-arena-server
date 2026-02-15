// Controller Texts
export const adminControllersText = {
  adminSignup: {
    existingAdmin: "Admin with this email already exists",
    createdAddress: "Something went wrong while registering the address",
    createdAdmin: "Something went wrong while registering the admin",
    otp: "Something went wrong while generating OTP",
    deactivated:
      "Your account is deactivated, please enter the OTP sent to your mail to activate",
    success:
      "OTP will be sent to your email, please confirm it to activate account",
  },
  adminVerifySignupOtp: {
    otpNotFound: "Admin or OTP not found",
    otpExpired: "OTP time expired",
    invalidOtp: "Invalid OTP",
    success: "Account activated and logged in",
  },
  adminLogin: {
    nonexistent: "Admin does not exist",
    notVerified: "Cannot login, admin not verified",
    invalidCredentials: "Invalid admin credentials",
    blocked: "Admin Id blocked, access denied",
    failedGenOtp: "Something went wrong while generating OTP",
    deactivated:
      "Your account is deactivated, please enter the OTP sent to your mail to activate",
    success: "Admin logged in successfully",
  },
  adminLogout: {
    notFound: "Admin not found",
    success: "Admin logged out successfully",
  },
  adminRefreshAccessToken: {
    unauthorized: "Unauthorized request, Re-Login",
    invalidToken: "Invalid Refresh Token",
    expiredToken: "Expired Refresh Token, Re-Login",
    success: "accessToken refreshed successfully, no need to re-login",
  },
  adminSendOtp: {
    notFound: "failed to send otp.",
    otpGenerateFailed: "Something went wrong while generating OTP",
    success: "OTP sent successfully",
  },
  adminVerifyResetOtp: {
    notFound: "Admin or OTP not found",
    otpExpired: "OTP time expired",
    invalidOtp: "Invalid OTP",
    otpTokenGenFailed: "Failed to generate reset token",
    success: "OTP verified — reset your credentials within 10 minutes",
  },
  adminResetPassword: {
    failed: "Password reset failed",
    success: "Password reset successfully",
  },
  adminReActivate: {
    notFound: "Admin or otp not found for email",
    otpExpired: "OTP expired",
    already: "Admin already activated",
    invalidOtp: "Invalid OTP",
    success: "Admin re-activated and logged-in successfully",
  },
  adminAllProducts: {
    zeroProducts: "0 Products found",
    success: "Products fetched successfully",
  },
  adminGetProfile: {
    notFound: "Admin profile not found",
    success: "Admin fetched successfully",
  },
  adminEditProfile: {
    notFound: "Admin profile not found or is a user",
    updateAddressFailed: "Failed to update address",
    success: "Admin profile edited successfully",
  },
  adminDeleteProfile: {
    notFound: "Admin not found",
    invalidCredentials: "Invalid credentials",
    failedDelAddress: "Failed to deactivate admin address",
    failed: "Failed to deactivate admin",
    success: "Admin profile deactivated successfully",
  },
};

export const bannerControllersText = {
  getBanner: {
    idNotSet: "Banner ID not configured",
    failed: "failed to load banner message",
    success: "banner message fetched successfully",
  },
  editBanner: {
    idNotSet: "Banner ID not configured",
    failed: "Failed to edit banner",
    success: "Banner Message edited successfully",
  },
  editHeroSection: {
    invalidOrMissingIdx:
      "Query parameter 'idx' is required and must be a non-negative integer (0-2).",
    invalidIdxRange:
      "Invalid 'idx' value — expected an integer between 0 and 2.",
    noUpdatesProvided: "No hero text or image provided to update.",
    noEffectiveUpdates: "No effective updates to apply.",
    failed: "Failed to edit hero section",
    success: "Hero section edited successfully",
  },
  deleteBanner: {
    idNotSet: "Banner ID not configured",
    failed: "Failed to delete banner",
    success: "Banner Message deleted successfully",
  },
  getHeroSection: {
    failed: "Failed to edit hero section",
    success: "Hero section edited successfully",
  },
};

export const cartControllersText = {
  getAllCartItems: {
    noCartFound: "No active cart items found",
    success: "Cart items fetched successfully",
  },
  newItemsInCart: {
    outOfStock: "Sorry, this product is out of stock",
    alreadyExists: "Item already exists in the cart",
    success: "Item added to cart successfully",
    failed: "Failed to add item to cart",
  },
  editItemsInCart: {
    outOfStock: "Sorry, this product is out of stock",
    qty: "Quantity must be at least MOQ",
    notFound: "Cart item not found or inactive",
    invalidPId: "Invalid productId",
    exceededStock: "Quantity exceeded available stock",
    failed: "Failed to save cart updates",
    success: "Cart item edited successfully",
  },
  deleteItemsInCart: {
    failed: "Failed to delete cart item",
    success: "Cart item deleted successfully",
  },
  getCartItemsCount: {
    empty: "Cart is empty",
    success: "Cart items fetched successfully",
  },
  checkProductAndValidateId: {
    invalidId: "Invalid product ID",
    notFound: "Product not found",
  },
  checkAndValidateCustomDesignId: {
    invalidId: "Invalid custom design ID",
    notFound: "Custom Design not found",
  },
};

export const contactUsControllersText = {
  postContactUsRequest: {
    failed: "Failed to make contact us request",
    success: "Contact-Us request made successfully",
  },
  checkUserAndValidateId: {
    invalidId: "Invalid user ID",
    notFound: "User not found",
  },
};

export const leadMgmtControllersText = {
  allOrdersList: {
    missingPage: "Missing page query param",
    invalidPage: "Invalid page",
    failed: "Failed to fetch orders data",
    success: "Orderes fetched successfully",
  },
  allContactUsList: {
    missingPage: "Missing page query param",
    invalidPage: "Invalid page",
    failed: "Failed to fetch contact us data",
    success: "ContactUs data fetched successfully",
  },
  allSubscribeNowList: {
    missingPage: "Missing page query param",
    invalidPage: "Invalid page",
    failed: "Failed to fetch subscribe now data",
    success: "Subscribe Now data fetched successfully",
  },
  allQuoteRequestList: {
    missingPage: "Missing page query param",
    invalidPage: "Invalid page",
    failed: "Failed to fetch quote data",
    success: "Quote data fetched successfully",
  },
};

export const orderControllersText = {
  getOrderHistory: {
    missingPage: "Missing required query parameter: page",
    invalidPage: "Invalid page number; must be ≥ 1",
    invalidTime: "`time` must be one of current, last, secondLast, thirdLast",
    success: "Order history fetched successfully",
  },
  newOrder: {
    missingAdmin: "Product missing admin reference",
    success: "Orders created successfully",
  },
  cancelOrderRequest: {
    alreadyShipped: "Cannot cancel, order already shipped",
    failed: "Order cancel request failed",
    success: "Order cancel request noted",
  },
};

export const orderMgmtControllersText = {
  getOrderList: {
    missingPage: "Missing required query parameter: page",
    invalidPage: "Invalid page number; must be ≥ 1",
    success: "Orders fetched successfully",
  },
  postSendAmount: {
    invalidPct: "Invalid taxPct; must be a non-negative number",
    badReq: "Bad Request for this route",
    notFound: "No product info for order - ",
    misMatchCurr: "Mismatched currency symbols in orders: expected",
    badTotal: "Bad totalPrice on order",
    failed: "Failed to apply taxes",
    success: "Tax applied successfully",
  },
  postSendEmail: {
    badReq: "Bad request for this route",
    failedFetch: "Failed to fetch user for sending email",
    misMatch: "Mismatch between products and orders",
    failed: "Failed to update status of orders",
    success: "Email Sent Successfully",
  },
  setOrderStatus: {
    invalidStatus: "Invalid or missing status",
    badReq: "Cancel request not authorized for these orders",
    failed: "Failed to update order status",
    failedFetchUser: "Failed to fetch user for sending email",
    misMatch: "Mismatch between products and orders",
    success: "Status updated successfully",
  },
};

export const productControllersText = {
  getProducts: {
    missingPage: "Missing required query parameter: page",
    invalidPage: "Invalid page number; must be ≥ 1",
    notFound: "No products found",
    success: "Products fetched successfully",
  },
  productById: {
    invalidId: "Invalid product ID",
    notFound: "Product not found",
    success: "Product fetched successfully",
  },
  getSimilarByProduct: {
    invalidId: "Invalid product ID",
    notFound: "Product not found",
    success: "Similar products fetched successfully",
  },
  getSimilarByType: {
    invalidId: "Invalid product ID",
    notFound: "Product not found",
    noType: "Seed product has no type assigned",
    success: "Similar products by type fetched successfully",
  },
  newProduct: {
    noImagesProvided: "No images uploaded",
    failedCodeGen: "Failed to generate article code",
    failed: "Product creation failed",
    typeFailed: "Product type creation failed",
    linkingFailed: "Linking product type failed",
    success: "Product listed successfully",
  },
  editProduct: {
    noImagesProvided: "No images uploaded",
    notFound: "Product not found",
    typeFailed: "Failed to update product type details",
    success: "Product edited successfully",
  },
  deleteProduct: {
    notFound: "Product not found",
    typeFailed: "Product type record missing or deletion failed",
    success: "Product and all associated records deleted successfully",
  },
  getTypeNames: {
    notFound: "No type names found",
    success: "Type names fetched successfully",
  },
  getTypeColours: {
    notFound: "No type colours found",
    success: "Type colours fetched successfully",
  },
  getMinMaxPrice: {
    notFound: "No products found",
    invalidPrice: "No valid prices",
    success: "Price bracket fetched successfully",
  },
  getLatestThreeProducts: {
    notFound: "No products found",
    success: "Latest Three Products fetched successfully",
  },
  getTypeNameSuggestions: {
    invalidQuery: "No query provided",
    success: "Type-Name suggestions fetched successfully",
  },
  getTypeColourSuggestions: {
    invalidQuery: "No query provided",
    success: "Type-Colour suggestions fetched successfully",
  },
  getProductTitleSuggestions: {
    invalidQuery: "No query provided",
    success: "Product titles suggestions fetched successfully",
    notFound: "No suggestions found for query",
  },
  getSearchProducts: {
    missingPage: "Missing page query param",
    invalidPage: "Invalid page",
    invalidQuery: "No query provided",
    notFound: "No products found for query",
    success: "Products fetched successfully",
  },
};

export const quoteControllersText = {
  postQuoteRequest: {
    notFound: "Product not found",
    validQty: "Quantity must be >= minimum order quantity",
    failed: "Failed to make quote request",
    success: "Quote request made successfully",
  },
  checkUserAndValidateId: {
    invalidId: "Invalid user ID",
    notFound: "User not found",
  },
};

export const reviewControllersText = {
  reviewGetAll: {
    zeroFound: "0 Reviews found",
    success: "Reviews fetched successfully",
  },
  reviewGetOne: {
    invalidId: "Invalid review ID",
    notFound: "Review not found",
    success: "Review fetched successfully",
  },
  reviewNew: {
    alreadyReviewed: "You've already reviewed this product",
    failed: "Review creation failed",
    success: "Review created successfully",
  },
  reviewEdit: {
    notFound: "Review not found",
    success: "Review updated successfully",
  },
  reviewDelete: {
    failed: "Review not found or already deleted",
    success: "Review deleted successfully",
  },
  checkProductAndValidateId: {
    invalidId: "Invalid product ID",
    success: "Product not found",
  },
};

export const subscriptionControllersText = {
  postSubscription: {
    alreadySub: "Already subscribed with this email",
    failed: "Failed to subscribe",
    success: "Subscribed successfully",
  },
};

export const userControllersText = {
  userSignup: {
    alreadyExists: "User with this email already exists",
    failedAddress: "Something went wrong while registering the address",
    failed: "Something went wrong while registering the user",
    failedGenOtp: "Something went wrong while generating OTP",
    deactivated:
      "Your account is deactivated, please enter the OTP sent to your mail to activate",
    success:
      "OTP will be sent to your email, please confirm it to activate account",
  },
  userVerifySignupOtp: {
    notFound: "User or OTP not found",
    otpExpired: "OTP time expired",
    invalidOtp: "Invalid OTP",
    success: "Account activated and logged in",
  },
  userLogin: {
    notFound: "User does not exist",
    notVerified: "Cannot login, user not verified",
    invalid: "Invalid user credentials",
    blocked: "User Id blocked, access denied",
    failedGenOtp: "Something went wrong while generating OTP",
    deactivated:
      "Your account is deactivated, please enter the OTP sent to your mail to activate",
    success: "User logged in successfully",
  },
  userLogout: {
    notFound: "User not found",
    success: "User logged out successfully",
  },
  userRefreshAccessToken: {
    badReq: "Unauthorized request, Re-Login",
    invalidToken: "Invalid Refresh Token",
    expiredToken: "Expired Refresh Token, Re-Login",
    success: "accessToken refreshed successfully, no need to re-login",
  },
  userSendOtp: {
    invalid: "If an account exists for that email,OTP will be sent shortly.",
    failed: "Something went wrong while generating OTP",
    success: "OTP sent successfully",
  },
  userVerifyResetOtp: {
    notFound: "User or OTP not found",
    otpExpired: "OTP time expired",
    invalidOtp: "Invalid OTP",
    failed: "Failed to generate reset token",
    success: "OTP verified — reset your credentials within 10 minutes",
  },
  userResetPassword: {
    failed: "Password reset failed",
    success: "Password reset successfully",
  },
  userReActivate: {
    notFound: "User or otp not found for email",
    otpExpired: "OTP expired",
    already: "User already activated",
    invalidOtp: "Invalid OTP",
    success: "User re-activated and logged-in successfully",
  },
  userGetProfile: {
    notFound: "User profile not found",
    success: "User fetched successfully",
  },
  userEditProfile: {
    notFound: "User profile not found or is an admin",
    failed: "Failed to update profile",
    success: "profile updated successfully",
  },
  userDeleteProfile: {
    notFound: "User not found",
    invalid: "Invalid credentials",
    failedAddress: "Failed to deactivate user address",
    failed: "Failed to deactivate user",
    success: "User profile deactivated successfully",
  },
};

export const userMgmtControllersText = {
  getEmailSuggestions: {
    invalidQuery: "Invalid query email",
    success: "Email suggestions fetched successfully",
  },
  getAllUsers: {
    missingPage: "Missing page query param",
    invalidPage: "Invalid page",
    failed: "Failed to fetch users data",
    success: "Users data fetched successfully",
  },
  getAllAdmins: {
    missingPage: "Missing page query param",
    invalidPage: "Invalid page",
    failed: "Failed to fetch admins data",
    success: "Admins data fetched successfully",
  },
  getAllNonVerifiedIds: {
    missingPage: "Missing page query param",
    invalidPage: "Invalid page",
    invalidAdmin: "Admin flag can be only true or false",
    failed: "Failed to fetch non-verified ids data",
    success: "Non-Verified ids data fetched successfully",
  },
  getAllBlockedIds: {
    missingPage: "Missing page query param",
    invalidPage: "Invalid page",
    invalidAdmin: "Admin flag can be only true or false",
    failed: "Failed to fetch blocked ids data",
    success: "Blocked Ids data fetched successfully",
  },
  getAllReqAdmins: {
    missingPage: "Missing page query param",
    invalidPage: "Invalid page",
    failed: "Failed to fetch requested admins data",
    success: "Requested admins data fetched successfully",
  },
  blockId: {
    already: "Already blocked",
    failed: "Failed to block id",
    success: "Id blocked successfully",
  },
  approveAdmin: {
    already: "Admin already approved",
    notAllowed: "User Ids are not allowed in this route",
    failed: "Failed to approve admin",
    success: "Admin approved successfully",
  },
  rejectAdmin: {
    already: "Admin already rejected",
    notAllowed: "User Ids are not allowed in this route",
    failed: "Failed to reject admin",
    success: "Admin rejected successfully",
  },
  unblockId: {
    already: "Already unblocked",
    failed: "Failed to unblock id",
    success: "Id unblocked successfully",
  },
  verifyId: {
    already: "Already verified",
    failed: "Failed to verify id",
    success: "Id verified successfully",
  },
  unverifyId: {
    already: "Already unverified",
    failed: "Failed to unverify id",
    success: "Id unverified successfully",
  },
  checkAndValidateId: {
    invalidId: "Invalid id",
    notFound: "Id not found",
  },
};

export const imageControllersText = {
  getImageById: {
    invalidId: "Invalid image id",
    notFound: "Image not found",
  },
};

export const blogControllersText = {
  getAllBlogs: {
    failed: "Failed to fetch blogs",
    success: "Blogs fetched successfully",
  },
  getBlog: {
    notFound: "Blog not found",
    invalidTitle: "Invalid title slug in url",
    success: "Blog fetched successfully",
  },
  postBlog: {
    failed: "Failed to create blog",
    failedSlug: "Failed to create title slug",
    success: "Blog created successfully",
  },
  putBlog: {
    failed: "Failed to edit blog",
    failedSlug: "Failed to create title slug",
    success: "Blog edited successfully",
  },
  deleteBlog: {
    already: "Blog already deleted",
    failed: "Failed to delete blog",
    success: "Blog deleted successfully",
  },
  checkBlogAndValidateId: {
    invalidId: "Invalid blog id",
    notFound: "Blog not found",
  },
  checkAndValidateImgId: {
    invalidId: "Invalid Image ID",
    notFound: "Image not found",
  },
};

export const customDesignControllersText = {
  getAllCustomDesigns: {
    notFound: "No custom designs found",
    success: "Custom Designs fetched successfully",
  },
  getCustomDesign: {
    success: "Custom Design fetched successfully",
  },
  postCustomDesign: {
    max: "Cannot upload more than 3 custom designs per product",
    failed: "Failed to upload custom design",
    success: "Custom Design uploaded successfully",
  },
  putCustomDesign: {
    failed: "Failed to edit custom design",
    success: "Custom Design edited successfully",
  },
  deleteCustomDesign: {
    already: "Custom Design already deleted",
    failed: "Failed to delete custom design",
    success: "Custom Design deleted successfully",
  },
  checkAndValidateImgId: {
    invalidId: "Invalid Image ID",
    notFound: "Image not found",
  },
  checkAndValidateProductId: {
    invalidId: "Invalid Product ID",
    notFound: "Product not found or deleted",
  },
};

// Util Texts
export const authHelperText = {
  hashPassword: {
    invalid: "Invalid password",
    error: "Error while hashing password",
  },
  comparePassword: {
    invalid: "Invalid arguments",
    error: "Error while comparing password",
  },
};

export const getNextSeqText = {
  getNextArticleSeq: {
    failed: "Failed to load ArticleSequence counter",
  },
  getNextOrderNumber: {
    failed: "Failed to load OrderSequence counter",
  },
};

export const jwtHelperText = {
  generateAccessToken: {
    invalid: "generateAccessToken called with invalid user object",
  },
  generateRefreshToken: {
    invalid: "generateRefreshToken called with invalid user object",
  },
  generateResetToken: {
    invalid: "generateOtpToken called with invalid user object",
  },
  generateAccessAndRefreshTokens: {
    failed: "Something went wrong while generating refresh and access token",
  },
};

export const saveImageToDbText = {
  failed: "Failed to upload image",
};

// Middleware Texts
export const adminMiddlewaresText = {
  isAdmin: {
    unauth: "Unauthorized Request",
    idBlocked: "Admin Id blocked, access denied",
  },
  isProductOwner: {
    notFound: "Product not found",
    notOwner: "Not an owner of product",
  },
  isUserOrAdmin: {
    unauth: "User or Admin not authorized for this route",
    idBlocked: "User or Admin is blocked, access denied",
  },
};

export const authMiddlewaresText = {
  verifyAccessJWT: {
    unauth: "Unauthorized request",
    invalidToken: "Invalid Access Token",
    notVerified: "Not a verified user, Verify first before accessing resources",
    idBlocked: "User Id blocked, access denied",
  },
  verifyResetJWT: {
    unauth: "Unauthorized request",
    invalidOtp: "Invalid OTP Token",
  },
};

export const orderMiddlewaresText = {
  isAuthenticatedCartItems: {
    invalid: "Some cart items are invalid or unauthorized.",
  },
  isOrderAdmin: {
    notFound: "No orders found for number",
    unauth: "Admin not authorized for this route",
  },
  isOrderUser: {
    notFound: "No orders found for user or number",
  },
};

export const rateLimiterMiddlewaresText = {
  otpLimiter: {
    error: "Too many OTPs sent - cool down for 15 minutes.",
  },
};

export const superAdminMiddlewaresText = {
  isSuperAdmin: {
    unauth: "Not Authorized for this route",
  },
  isAdminOrSuperAdmin: {
    unauth: "User not authorized for this route",
  },
  isUserOrSuperAdmin: {
    unauth: "Admin not authorized for this route",
  },
};

export const userMiddlewaresText = {
  isReviewOwner: {
    invalid: "Invalid review ID",
    notFound: "Review not found",
    unauth: "Not an author of review",
  },
  isUser: {
    unauth: "Admin not authorized",
    idBlocked: "User id blocked, access denied",
  },
  isCartOwner: {
    invalid: "Invalid cart ID",
    notFound: "Cart not found",
    unauth: "Not an author of cart",
  },
  isCustomDesignOwner: {
    invalid: "Invalid cart ID",
    notFound: "Custom Design not found",
    unauth: "Not author of custom design",
  },
};

export const multerMiddlewareText = {
  onlyImages: "Only image files are allowed",
};

// Schema Texts
export const joiValidationSchemaText = {
  email: {
    base: "Please provide a valid email address.",
    empty: "The email field cannot be empty.",
    required: "The email field is mandatory.",
  },
  password: {
    base: "The password field must be a string.",
    min: "The password must be at least 8 characters long.",
    required: "The password field is mandatory.",
  },
  otpCode: {
    length: "OTP must be exactly 6 digits.",
    required: "The OTP code is mandatory.",
  },
  digitString: {
    base: (fieldName) => `The ${fieldName} field must be a string of digits.`,
    pattern: (fieldName) => `The ${fieldName} must contain only digits.`,
    min: (fieldName, minLen) =>
      `The ${fieldName} must be at least ${minLen} digits long.`,
    required: (fieldName) => `The ${fieldName} field is mandatory.`,
  },
  textField: {
    base: (fieldName) => `The ${fieldName} field must be a string.`,
    empty: (fieldName) => `The ${fieldName} field cannot be empty.`,
    max: (fieldName, maxLength) =>
      `The ${fieldName} cannot exceed ${maxLength} characters.`,
    required: (fieldName) => `The ${fieldName} field is mandatory.`,
  },
  optionalTextField: {
    base: (fieldName) => `The ${fieldName} field must be a string.`,
    empty: (fieldName) =>
      `If provided, the ${fieldName} field cannot be empty.`,
    max: (fieldName, maxLength) =>
      `If provided, the ${fieldName} cannot exceed ${maxLength} characters.`,
  },
  objectId: {
    hex: "The ID must be a valid hex string.",
    length: "The ID must be 24 characters long.",
  },
  joiUserSignupSchema: {
    isAdmin: {
      only: "The isAdmin field must be exactly 0 for user.",
      base: "The isAdmin field must be a number.",
      required: "The isAdmin field is mandatory for user.",
    },
    isRegisteredAsAdmin: {
      only: "The isRegisteredAsAdmin field must be false for user.",
      base: "The isRegisteredAsAdmin field must be a boolean.",
      required: "The isRegisteredAsAdmin field is mandatory for user.",
    },
    gender: {
      only: "The gender field must be one of [M, F, O].",
      base: "The gender field must be a string.",
      required: "The gender field is mandatory.",
    },
  },
  joiAdminSignupSchema: {
    isAdmin: {
      only: "The isAdmin field must be 0 for admin initially.",
      base: "The isAdmin field must be a number.",
      required: "The isAdmin field is mandatory for admin.",
    },
    isRegisteredAsAdmin: {
      only: "The isRegisteredAsAdmin field must be true for admin.",
      base: "The isRegisteredAsAdmin field must be a boolean.",
      required: "The isRegisteredAsAdmin field is mandatory for admin.",
    },
    gender: {
      only: "The gender field must be one of [M, F, O].",
      base: "The gender field must be a string.",
      required: "The gender field is mandatory.",
    },
  },
  joiProductSchema: {
    moq: {
      base: "The moq field must be a number.",
      integer: "The moq must be an integer.",
      min: "The moq must be at least 1.",
      required: "The moq field is mandatory.",
    },
    price: {
      pattern:
        "Price must start with a currency symbol followed by a space and a number (e.g., '$ 69.99'). Only 2 decimal places allowed.",
      base: "The price field must be a string.",
      required: "The price field is mandatory.",
    },
    availableQty: {
      base: "The availableQty field must be a number.",
      integer: "The availableQty must be an integer.",
      min: "The availableQty cannot be negative.",
      required: "The availableQty field is mandatory.",
    },
    discount: {
      base: "The discount field must be a number.",
      integer: "The discount must be an integer.",
      min: "The discount cannot be negative.",
      max: "The discount cannot exceed 99.",
    },
    existingIds: {
      base: "The existingIds field must be a string",
      empty: "If provided existingIds field can't be empty",
    },
  },
  joiProductFilterSchema: {
    typeName: {
      base: "typeName must be a string.",
      empty: "typeName cannot be empty.",
    },
    typeColours: {
      base: "Each colour must be a string.",
      empty: "Colour cannot be empty.",
      Abase: "typeColours must be an array of strings.",
    },
    minPrice: {
      base: "minPrice must be a number.",
      min: "minPrice cannot be negative.",
    },
    maxPrice: {
      base: "maxPrice must be a number.",
      min: "maxPrice cannot be negative.",
    },
    moq: {
      base: "MOQ must be a number.",
      integer: "MOQ must be an integer.",
      min: "MOQ must be at least 1.",
    },
    discount: {
      base: "discount must be a number.",
      integer: "discount must be an integer.",
      min: "discount cannot be negative.",
      max: "discount cannot exceed 99.",
    },
  },
  joiReviewSchema: {
    rating: {
      base: "The rating field must be a number.",
      min: "The rating must be at least 1.",
      max: "The rating must be at max 5.",
      required: "The rating field is mandatory.",
    },
  },
  joiProfileEditSchema: {
    gender: {
      only: "The gender field must be one of [M, F, O].",
      base: "The gender field must be a string.",
      required: "The gender field is mandatory.",
    },
  },
  joiQuoteSchema: {
    qty: {
      base: "The qty field must be a number.",
      integer: "The qty must be an integer.",
      min: "The qty must be at least 1.",
      required: "The qty field is mandatory.",
    },
  },
  joiCartSchema: {
    qty: {
      base: "The qty field must be a number.",
      integer: "The qty must be an integer.",
      min: "The qty must be at least 1.",
      required: "The qty field is mandatory.",
    },
    totalPrice: {
      pattern:
        "Price must start with a currency symbol followed by a space and a number (e.g., '$ 69.99'). Only 2 decimal places allowed.",
      base: "The price field must be a string.",
      required: "The price field is mandatory.",
    },
  },
  joiOrderSchema: {
    cartIds: {
      base: "cartIds must be an array of IDs.",
      min: "You must provide at least one cart ID.",
      required: "The cartIds field is mandatory.",
    },
    saveAddress: {
      required: "The saveAddress field is required.",
    },
    paymentOption: {
      only: "paymentOption must be one of [Bank Transfer, Net Banking].",
      required: "The paymentOption field is mandatory.",
    },
    shippingMethod: {
      only: "shippingMethod must be one of [Pickup From Warehouse, Postal Delivery].",
      required: "The shippingMethod field is mandatory.",
    },
    printDesign: {
      uri: "printDesign.url must be a valid URI.",
      required: "printDesign.url is required when printDesign is provided.",
    },
  },
  joiOrderHistorySchema: {
    orderStatus: {
      only: "orderStatus must be one of [pending, shipped, delivered].",
      required: "The orderStatus field is mandatory.",
      base: "The orderStatus field must be a string.",
    },
    orderTime: {
      base: "orderTime must be a valid date.",
      format: "orderTime must be in ISO 8601 format (e.g., 2025-07-20).",
      required: "The orderTime field is mandatory.",
    },
  },
  joiDateFilterSchema: {
    fromDate: {
      base: "fromDate must be a valid ISO 8601 date.",
      format: "fromDate must be in ISO 8601 format (e.g., 2025-07-20).",
    },
    toDate: {
      base: "toDate must be a valid ISO 8601 date.",
      format: "toDate must be in ISO 8601 format (e.g., 2025-07-21).",
      min: "toDate cannot be earlier than fromDate.",
    },
  },
  joiHeroTextSchema: {
    heroTexts: {
      base: "Each hero text must be a string.",
      empty: "Hero text cannot be empty.",
      required: "Hero text is required.",
    },
    heroArray: {
      base: "Hero texts must be provided in an array.",
      length: "Exactly 3 hero texts must be provided.",
      required: "Hero texts are required.",
    },
  },
};
