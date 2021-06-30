renderSection2()
function renderSection2() {
    let container = "";
    let containerleft = "";
    let cardnumber = 13;
    let leftParthead1 = 3;
    let leftParthead2 = 4;
    let head1 = false;
    let head2 = false;
    let ads = true;
    for (let i = 0; i < cardnumber; i++) {
        container += `
    <div class="col-md-6">
        <div class="medicalCard">
            <h6>عنوان فرعي</h6>
            <div class="img-placeholder h-75">
                <img src="image/tbl_articles_article_30074_7915371e139-c1b6-4ed0-86ad-bda661548890.jpg">
            </div>
            <p>هذا مثال تجريبي </p>
        </div>
    </div>
    `;
    
        if (ads == true) {
            containerleft +=
                `<div class="col my-1">
                    <div class="ads">
                        put ads here
                    </div>
                </div>
                `
            ads = false;
        }
        if (leftParthead1 != 0) {
            if (head1 == false) {
                containerleft += `
        <div class="col my-1">
          <div class="heading4 position-relative my-3">
            <h4 class="p-1">الأكثر قراءة</h4>
          </div>
        </div>
        `;
                head1 = true;
            }
            containerleft += `
        <div class="col my-1">
            <div class="fast-info">
                    <img src="image/calculator.jpg">                
                <p class="p-1">هذا مثال تجريبي</p>
            </div>
        </div>
        `;
            leftParthead1 -= 1;

        } else if (leftParthead2 != 0) {
            if (head2 == false) {
                containerleft += `
        <div class="col my-1">
            <div class="heading4 position-relative my-3">
              <h4 class="p-1">اقرأ أيضا</h4>
            </div>
        </div>
        `;
                head2 = true;
            }
            containerleft += `
        <div class="col my-1">
            <div class="fast-info">
                <img src="image/calculator.jpg">                
                <p class="p-1">هذا مثال تجريبي</p>
            </div>
        </div>
        `;
            leftParthead2 -= 1;
        }
    }
    document.getElementById("RightPart").innerHTML = container
    document.getElementById("leftPart").innerHTML = containerleft
}
