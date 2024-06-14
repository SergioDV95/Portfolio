export function contextReducer(context, action) {
   try {
      switch (action.type) {
         case "SET_LANG": {
            return { ...context, lang: action.lang };
         }
         case "SET_LIGHT": {
            return { ...context, light: context.light ? 0 : 1 };
         }
         case "SET_WIDTH": {
            return { ...context, lgWidth: action.matches };
         }
         case "SET_LOAD": {
            return { ...context, load: !context.load };
         }
         default: {
            throw TypeError(`Unknown action: ${action.type}`);
         }
      }
   } catch (error) {
      console.error(error.message);
   }
}