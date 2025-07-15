var t=document.getElementById("thumbs"),e=document.getElementById("largeImg");t.addEventListener("click",function(t){var a=null;if("IMG"===t.target.tagName?a=t.target.closest("a"):"A"===t.target.tagName&&(a=t.target),a&&a.hasAttribute("href")&&t.preventDefault(),a){var r=a.getAttribute("href");e.src=r}});
//# sourceMappingURL=index.e7d04fd0.js.map
