// lightGallery for industrial.html qualification block
document.getElementById('qualification-slider').addEventListener('click', function(e) {
  const imgQualification = this.dataset.qualification;
  const imgData = JSON.parse(imgQualification);

  e.preventDefault()
  e = e || window.event

  if (!imgQualification) return

  lightGallery(document.getElementById('qualification-slider'), {
    dynamic: true,
    download: false,
    counter: false,
    hideBarsDelay: 0,
    controls: true,

    dynamicEl: imgData
  })
});