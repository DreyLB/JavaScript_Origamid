export default function initTooltip() {}

const tooltips = document.querySelectorAll("[data-tooltip]");

tooltips.forEach((item) => {
  item.addEventListener("mouseover", onMouseOver);
});

function onMouseOver(event) {
  const toolTipBox = criarTooltipBox(this);

  toolTipBox.style.top = event.pageY + "px";
  toolTipBox.style.left = event.pageX + "px";

  this.addEventListener("mouseleave", onMouseLeave);
}

const onMouseLeave = {
  handle,
};

function criarTooltipBox(element) {
  const tooltipBox = document.createElement("div");
  const text = element.getAttribute("aria-label");
  tooltipBox.classList.add("tooltip");
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}
