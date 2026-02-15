import Joi from "joi";

// Reusable primitives
const email = Joi.string()
  .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  .required()
  .messages({
    "string.pattern.base": "Please provide a valid email address.",
    "string.empty": "The email field cannot be empty.",
    "any.required": "The email field is mandatory.",
  });

const password = Joi.string().min(8).required().messages({
  "string.base": "The password field must be a string.",
  "string.min": "The password must be at least 8 characters long.",
  "any.required": "The password field is mandatory.",
});

const digitString = (fieldName, minLen = 1) =>
  Joi.string()
    .pattern(/^\d+$/)
    .min(minLen)
    .required()
    .messages({
      "string.base": `The ${fieldName} field must be a string of digits.`,
      "string.pattern.base": `The ${fieldName} must contain only digits.`,
      "string.min": `The ${fieldName} must be at least ${minLen} digits long.`,
      "any.required": `The ${fieldName} field is mandatory.`,
    });

const textField = (fieldName, maxLength = 400) =>
  Joi.string()
    .trim()
    .min(1)
    .max(maxLength)
    .required()
    .messages({
      "string.base": `The ${fieldName} field must be a string.`,
      "string.empty": `The ${fieldName} field cannot be empty.`,
      "string.max": `The ${fieldName} cannot exceed ${maxLength} characters.`,
      "any.required": `The ${fieldName} field is mandatory.`,
    });

const optionalTextField = (fieldName, maxLength = 400) =>
  Joi.string()
    .trim()
    .min(1)
    .max(maxLength)
    .optional()
    .messages({
      "string.base": `The ${fieldName} field must be a string.`,
      "string.empty": `If provided, the ${fieldName} field cannot be empty.`,
      "string.max": `If provided, the ${fieldName} cannot exceed ${maxLength} characters.`,
    });

const objectId = Joi.string().hex().length(24).required().messages({
  "string.hex": "The ID must be a valid hex string.",
  "string.length": "The ID must be 24 characters long.",
});

export const joiUserSignUpSchema = Joi.object({
  fullName: textField("Full Name"),
  email,
  gender: Joi.string().valid("M", "F", "O").required().messages({
    "any.only": "The gender field must be one of [M, F, O].",
    "string.base": "The gender field must be a string.",
    "any.required": "The gender field is mandatory.",
  }),
  password,
});

export const joiLoginSchema = Joi.object({ email, password });
