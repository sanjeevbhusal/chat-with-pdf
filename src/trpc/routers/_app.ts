// import { router, procedure } from "../trpc";
// import { z } from "zod";

// export const appRouter = router({
//   hello: procedure
//     .input(
//       z.object({
//         text: z.string(),
//       })
//     )
//     .query((opts) => {
//       return {
//         greeting: `hello ${opts.input.text}`,
//       };
//     }),
// });

// export type AppRouter = typeof appRouter;
