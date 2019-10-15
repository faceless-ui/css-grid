const scopeCSSToSelector = (selector, cssDefinition) => {
  if (selector) {
    return `${selector} ${cssDefinition}`;
  }

  return cssDefinition;
};

export default scopeCSSToSelector;
