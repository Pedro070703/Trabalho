const z = require("zod")

const recipeSchema = z.object({
    name: z.string({
        required_error: "Nome invalido"
    }),
    description: z.string({
        required_error: "descriçao invalida"
    }),
    preparationTime: z.number({
        required_error: "tempo de preparaçao invalido"
    }).min(3)
})

module.exports = { recipeSchema }
