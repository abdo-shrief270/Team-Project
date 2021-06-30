// image  media query in all size with simple algorthim
// imgRender()
catogeryRender();
function setImgSize() {
  if (window.innerWidth >= 991) {
    catogerySizes("250");
  } else {
    catogerySizes();
  }
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 991) {
      catogerySizes("250");
      bodyAnchor();
    } else {
      catogerySizes();
      bodyAnchor();
    }
  });
}

function catogerySizes(h) {
  let catogery = Array.from(document.querySelectorAll(".catogery"));
  let height = window.innerWidth / 3.834;
  if (h != undefined) {
    height = h;
  } else if (height > 200) {
    height = 200;
  }
  catogery.map((img, index) => {
    img.style.height = height;
  });
}

function catogeryRender() {
  let container = "";
  caption=["الثقافة الجنسية","صحة الاسنان","السرطان","السكري","صحة عامة","انف اذن حنجرة","الصحة النفسية","الطب البديل","صحة الرجل","الكلي والمسالك البولية","الامراض الجلدية والتناسلية","صحة المرأة"]
  for (let i = 0; i < 12; i++) {
    container += `            <div class="col-lg-3 mb-3">
                <div class="catogery position-relative overflow-hidden rounded">
                    <a href="www.google.com" class="catogeryAnchor h-100">
                        <div class="catogeryImg" style="background-image:url(${"image/sex-education.jpg"})"> </div>
                        <div class="catogeryCaption d-flex justify-content-between px-3 align-items-center">
                            <span class="leftArrow"><i class="fas fa-chevron-left"></i> </span>
                            <h3>${caption[i]}</h3>
                            <div class="indcation d-none"></div>
                        </div>
                    </a>
                </div>
            </div>`;
  }
  document.getElementById("departmentContainer").innerHTML = container;
  setImgSize();
  bodyAnchor();
}
function bodyAnchor() {
  let x = (575 - window.innerWidth) / 55;
  let y = (575 - window.innerWidth) / 100;
  let largeSize = [
    ["-4%", "14.9%"],
    ["3.7%", "65.8%"],
    ["12.7%", "9.4%"],
    ["21.2%", "78.7%"],
    ["29.3%", "3.3%"],
    ["40.2%", "85.3%"],
    ["46.6%", "-1%"],
    ["59.9%", "83.2%"],
    ["64.4%", "2.5%"],
    ["79.6%", "70.5%"],
    ["81.5%", "12.2%"],
  ];
  let meduimSize = [
    ["-3.5%", "16.2%"],
    ["4.3%", "66.8%"],
    ["13%", "10.5%"],
    ["21.6%", "79.8%"],
    ["29.7%", "4.6%"],
    ["40.6%", "86.5%"],
    ["47%", ".3%"],
    ["60.3%", "84.6%"],
    ["64.7%", "3.5%"],
    ["80%", "72.3%"],
    ["81.9%", "13.3%"],
  ];
  let smallSize = [
    [`${-4.2 - y}%`, `${15.3 - x}%`],
    [`${3.65 - y}%`, 0, `${21.1 - x}%`],
    [`${12.45 - y}%`, `${9.8 - x}%`],
    [`${20.9 - y}%`, 0, `${5.8 - x}%`],
    [`${29 - y}%`, `${3.8 - x}%`],
    [`${40 - y}%`, 0, `${0.4 - x}%`],
    [`${46.4 - y}%`, `${-0.6 - x}%`],
    [`${59.7 - y}%`, 0, `${0.1 - x}%`],
    [`${64 - y}%`, `${2.8 - x}%`],
    [`${79.5 - y}%`, 0, `${2.5 - x}%`],
    [`${81.25 - y}%`, `${12.6 - x}%`],
  ];
  let size;
  let bodyParts = document.querySelectorAll(".list li");
  if (window.innerWidth >= 991) {
    size = largeSize;
  } else if (window.innerWidth < 991 && window.innerWidth > 767) {
    size = meduimSize;
  } else if (window.innerWidth < 767 && window.innerWidth > 576) {
    size = largeSize;
  } else if (window.innerWidth < 576) {
    size = smallSize;
  }
  for (let i = 0; i < bodyParts.length; i++) {
    bodyParts[i].style.top = size[i][0];
    if (size[i][2]) {
      bodyParts[i].style.left = size[i][2];
    } else {
      bodyParts[i].style.right = size[i][1];
    }
  }
}