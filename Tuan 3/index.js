const productList = document.querySelector(".productList");
const paginationElement = document.querySelector(".paginationElement");
const getData = async () => {
    const res = await fetch("https://65e3dfc088c4088649f60f11.mockapi.io/pagination");
    const data = await res.json();


    return data;
};


const renderPage = async (currentPageNumber, productLimit) => {
    const data = await getData();
    let startPagination = (currentPageNumber - 1) * productLimit;
    let endPagination = currentPageNumber * productLimit;
    let html = "";
    for (let i = startPagination; i < endPagination; i++) {
        if (data[i]) {
            html += `
            <div class="col-lg-4 col-md-12 mb-4">
            <div class="card">
                <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light">
                    <img src="${data[i].img}"
                        class="w-100" />
                    <a href="#!">
                        <div class="mask">
                            <div class="d-flex justify-content-start align-items-end h-100">
                            ${data[i].G ? ` <h5><span class="badge bg-primary ms-2">G</span></h5>` : ""
                }
                ${data[i].Wireless ? ` <h5><span class="badge bg-danger ms-2">Wireless</span></h5>` : ""
                }
                ${data[i].sale ? `  <h5><span class="badge bg-warning ms-2">Sale</span></h5>` : ""
                }
                               
                                
                               
                            </div>
                        </div>
                        <div class="hover-overlay">
                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);">
                            </div>
                        </div>
                    </a>
                </div>
                <div class="card-body">
                    <a href="" class="text-reset">
                        <h5 class="card-title mb-3">${data[i].name}</h5>
                    </a>
                    <a href="" class="text-reset">
                        <p>Category</p>
                    </a>
                    <h6 class="mb-3">${data[i].price}$</h6>
                </div>
            </div>
        </div>
`
        }

    }
    productList.innerHTML = html;
};
const renderPaginationNumber = async (currentPageNumber, productLimit) => {
    const data = await getData();
    const paginationQuantity = Math.ceil(data.length / productLimit);

    if (paginationQuantity == 1) {
        paginationElement.innerHTML = `
          
                    <li class="page-item active"><a class="page-link">1</a></li>
                   
            `
    } else {
        let html = "";
        html += `<li class="page-item ${currentPageNumber == 1 ? "disabled" : ""}"><a class="page-link">Previous</a></li>`;
        for (let i = 1; i <= paginationQuantity; i++) {
            html += `<li class="page-item ${currentPageNumber == i ? "active" : ""}"><a class="page-link" onclick="movePage(${i})">${i}</a></li>`;
        }
        html += `<li class="page-item ${currentPageNumber == paginationQuantity ? "disabled" : ""}"><a class="page-link">Next</a></li>`;
        paginationElement.innerHTML = html;
    }

};
const movePage = (currentPage) => {
    localStorage.setItem("pageNumber", currentPage);
    app();
}
const app = () => {
    let productLimit = 6;
    if (localStorage.getItem("pageNumber")) {
        renderPage(localStorage.getItem("pageNumber"), productLimit);
        renderPaginationNumber(localStorage.getItem("pageNumber"), productLimit);
    } else {
        renderPage(1, productLimit);
        renderPaginationNumber(1, productLimit);
    }

}

app();

