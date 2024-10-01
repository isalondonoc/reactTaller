export const Traduccion = ({ nombre, idioma }) => {
  const translate = () => {
    switch (idioma) {
      case "es":
        return `Hola, ${nombre}!`;
      case "en":
        return `Hello, ${nombre}!`;
      case "Su":
        return `Hej, ${nombre}!`;
      case "jp":
        return `こんにちは, ${nombre}!`;
      default:
        return `Hola, ${nombre}!`;
    }
  };

  return (
    <div className="traduccion">
      <h1>{translate()}</h1>
    </div>
  );
};