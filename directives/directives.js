

function hightLight(el, binding) {
  const match = binding.value.temp;
  const reg = new RegExp(match, "g");
  const txt = binding.value.item;
  let str = "";
  if (txt) {
    str = txt.replace(
      reg,
      `<span style="${binding.value.style}">${match}</span>`
    );
  } else {
    str = "";
  }
  el.innerHTML = str;
}
const hightLightDirective = {
  bind(el, binding) {
    hightLight(el, binding)
  },
  componentUpdated(el, binding) {
    hightLight(el, binding)
  }
}

export { hightLightDirective }