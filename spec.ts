// TSLite work in progress spec
// Reference: https://matthamlin.me/blog/2024/october/tslite

// ## Files:
// TSLite files are similar to TypeScript files
// they share some of the same extension(s)
// TSLite mainly uses: `.ts` and `.tsx`
// We don't currently support the other file
// extension variants like:
// `.mts` or `.cts` (or others)

// ## Requirements:
// - All variable and function types must be strictly defined*
//    - Note - we could optionally chose to still do no inference, but default the type as `unknown` 🤔
// - Only valid ECMAScript features are allowed
//    - Note - we will need to clarify what this means, e.g. Stage-0+, Stage-1+, formalized features, etc? 🤔
//    - This means the following are disallowed: `enum`, `namespace`, `interface`
// - No `any` usage, `unknown` is allowed

// ## Built-in Types:
// - string
// - number
// - boolean
// - unknown
// - bigint
// - symbol
// - Array<Type>
// - Record<Type, Type> (object)
// - Map<Type, Type>
// - WeakMap<Type, Type>
// - Set<Type>
// - Promise<Type>

// ## Type Features
// - Unions (Type | Type)
// - Intersections (Type & Type)