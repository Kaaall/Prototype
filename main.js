// ketika di scroll kebawah 80px dari atas halaman, perkecil navbar, jarak, dan font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("navbar").style.padding = "30px 10px";
  } else {
    document.getElementsByClassName("navbar").style.padding = "80px 10px";
  }
}
