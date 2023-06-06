const z = require("zod");

const UserSchema = z.object({
  name: z.string({
    required_error: "É obrigatorio colocar um nome",
    invalid_type_error: "O nome deve ser uma String",
  }).min(3),

  email: z.string({
    required_error: "é obrigatorio ter uma descriçao",
  }).email("Email invalido"), 
  
  password: z.string({
    required_error: "é obrigatorio colocar uma senha",
  })

});

const LoginSchema = z.object({
  email: z.string({
    required_error: "é obrigatorio colocar uma descriçao",
  }).email("Email invalido"), 
  
  password: z.string({
    required_error: "é obrigatorio colocar uma senha",
  })

});

module.exports = {
  UserSchema,
  LoginSchema
}
