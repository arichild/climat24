// lightGallery for industrial.html qualification block
let qualification = document.getElementById('qualification-slider');

if(qualification) {
  qualification.addEventListener('click', function() {
    const imgQualification = this.dataset.qualification;
    const imgData = JSON.parse(imgQualification);

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
}

let test = document.querySelector('.reviews');

if(test) {
  test.addEventListener('click', function() {
    lightGallery(document.querySelector('.reviews'), {
      // dynamic: true,
      thumbnail: true,
      // download: false,
      // counter: false,
      // hideBarsDelay: 0,
      // controls: true,
    })
  })
}