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
            const load = { ...context.load };
            load.total = Array.from(document.querySelectorAll("img, object"));
            if (action.progress) {
               load.progress++;
            }
            if (action.complete) {
               load.complete = action.complete;
            }
            return { ...context, load: load };
         }
         default: {
            throw new Error(`Unknown action: ${action.type}`);
         }
      }
   } catch (error) {
      console.error(error.message);
   }
}