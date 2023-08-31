import React, { useReducer } from "react";

// createDataContext fonksiyonu, Context ve Provider'ı oluşturarak state yönetimi sağlar
export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  // Provider bileşeni, state ve dispatch'i kullanarak boundActions oluşturur
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    // Context.Provider, state ve boundActions'ı sağlayarak alt bileşenlere iletilir
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  // Oluşturulan Context ve Provider döndürülür
  return { Context, Provider };
};
/*
Bu kod bloğu, state yönetimi için kullanılan bir createDataContext fonksiyonunu içerir. 
Bu fonksiyon, belirtilen bir reducer, eylemler ve varsayılan bir başlangıç değeri alarak Context ve Provider bileşenlerini oluşturur. 
Bu sayede state yönetimi kolaylıkla yapılabilir ve ilgili eylemler dispatch edilerek state güncellenir.

*/