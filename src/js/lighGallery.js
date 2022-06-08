document.getElementById('dynamic').addEventListener('click', function() {
  lightGallery(document.getElementById('dynamic'), {
      dynamic: true,
      download: false,
      counter: false,
      hideBarsDelay: 0,
      controls: true,

      // prevHtml: ".zxc",

      dynamicEl: [{
          "src": '../images/qualification-popup.jpg',
          'thumb': '../images/qualification-popup.jpg',
      }, {
          'src': '../images/qualification-popup2.jpg',
          'thumb': '../images/qualification-popup2.jpg',
      }, {
          'src': '../images/qualification-popup3.jpg',
          'thumb': '../images/qualification-popup3.jpg',
      }]
  })
});