// फॉर्म स्प्री इंटीग्रेशन तथा फॉर्म फीडबैक हैंडलर
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('newsletter');
  if(form){
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = form.elements['email'].value;
      const msg = document.getElementById('form-msg');
      msg.textContent = 'सबमिट किया जा रहा है...';
      fetch(form.action, {
        method: "POST",
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(response => {
        if(response.ok) {
          msg.textContent = 'धन्यवाद! आपकी सदस्यता सफल रही।';
          form.reset();
        } else {
          msg.textContent = 'त्रुटि: सदस्यता नहीं हो सकी, बाद में प्रयास करें।';
        }
      }).catch(() => {
        msg.textContent = 'नेटवर्क समस्या, कृपया पुनः प्रयास करें।';
      });
    });
  }
});


// new feature zoom ko inspect features ko band karne ke liye javascript code by rohit singh


(function () {
 
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  }, { passive: false });

  // 2) कीबोर्ड शॉर्टकट रोकना (F12, Ctrl+Shift+I/J/C/K, Ctrl+U, Ctrl+Shift+C, Ctrl+S)
  document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === 'F12') { e.preventDefault(); return; }

    if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'K'].includes(e.key.toUpperCase())) {
      e.preventDefault(); return;
    }
   
    if (e.ctrlKey && ['U', 'S'].includes(e.key.toUpperCase())) {
      e.preventDefault(); return;
    }
   
    if (e.ctrlKey && e.shiftKey && e.key === 'C') { e.preventDefault(); return; }
  }, { passive: false });

  
  window.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, { passive: false });

  // 4) Mobile: double-tap zoom रोकना
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (e) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, { passive: false });

  // 5) iOS Safari gesture events रोकने की कोशिश (non-standard)
  document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  }, { passive: false });

  // 6) Optional: selection & copy रोकना (परिस्थितिजन्य)
  document.addEventListener('copy', function (e) {
    e.preventDefault();
    // आप चाहें तो user को msg दिखा सकते हैं
    // alert('कापी करना निषेद्ध है।');
  });
})();
