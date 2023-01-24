import '../scss/index.scss';
$(document).ready(function () {
  // Handle settings Checkboxes bold via JS because css [checked] cannot
  // go up the DOM and back down to the parents next sibling
  console.log('js-file');
  // $('.checkbox-item').change(function (e) {
  //   $(this.parentElement.nextElementSibling).toggleClass('bold');
  // });
  // // Handle the ripples when button is clicked
  // $('.button').click(function (e) {
  //   const button = e.currentTarget;
  //   const diameter = Math.max(button.clientWidth, button.clientHeight);
  //   // const diameter = Math.max(button.offsetWidth, button.offsetHeight);
  //   const radius = diameter / 2;
  //   const circle = document.createElement('span');
  //   const ripple = button.hasChildNodes('.ripple');

  //   circle.style.width = circle.style.height = `${diameter}px`;
  //   circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
  //   circle.style.top = `${e.pageY - (button.offsetTop + radius)}px`;
  //   // debugging info for ripple posotion
  //   // console.log('clientY', e.clientY);
  //   // console.log('pageY', e.pageY);
  //   // console.log('diameter', diameter);
  //   // console.log('radius', radius);
  //   // console.log('circle.style.top', circle.style.top);

  //   circle.classList.add('ripple');

  //   if (ripple) {
  //     $('.ripple').remove();
  //   }

  //   button.append(circle);
  // });

  // // Handle button events
  // $('#close-button').click(function () {
  //   alert('close button pressed');
  // });

  // // $('#add-another-plan').click(function () {
  // //   alert('Add another plan button pressed');
  // // });
});
