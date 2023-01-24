import Tooltip from "../../components/Tooltip.svelte";

export function tooltip(element: Element) {
  let title: string;
  let tooltipComponent: Tooltip;
  function mouseOver(event: any) {
    // NOTE: remove the `title` attribute, to prevent showing the default browser tooltip
    // remember to set it back on `mouseleave`
    title = element.innerHTML
    // element.removeAttribute('title');

    tooltipComponent = new Tooltip({
      props: {
        title: title,
        x: event.pageX,
        y: event.pageY,
      },
      target: document.body,
    });
  }
  function mouseMove(event: any) {
    tooltipComponent.$set({
      x: event.pageX,
      y: event.pageY,
    })
  }
  function mouseLeave() {
    tooltipComponent.$destroy();
    // NOTE: restore the `title` attribute
    element.setAttribute('title', title);
  }

  element.addEventListener('mouseover', mouseOver);
  element.addEventListener('mouseleave', mouseLeave);
  element.addEventListener('mousemove', mouseMove);

  return {
    destroy() {
      element.removeEventListener('mouseover', mouseOver);
      element.removeEventListener('mouseleave', mouseLeave);
      element.removeEventListener('mousemove', mouseMove);
    }
  }
}