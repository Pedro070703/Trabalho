const z = require("zod");

const UserSchema = z.object({
  name: z.string({
    required_error: "Name must be required",
    invalid_type_error: "Name must be a string",
  }).min(3),

  email: z.string({
    required_error: "Description must be required",
  }).email("Invalid email."), 
  
  password: z.string({
    required_error: "Password must be required",
  })

});

const LoginSchema = z.object({
  email: z.string({
    required_error: "Description must be required",
  }).email("Invalid email."), 
  
  password: z.string({
    required_error: "Password must be required",
  })

});

module.exports = {
  UserSchema,
  LoginSchema
}
