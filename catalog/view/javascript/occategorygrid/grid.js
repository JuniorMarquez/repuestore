$(document).ready(function () {
    if(localStorage.getItem('type') == null) {
        var type = $('#category-view-type').val();
        var cols = $('#category-grid-cols').val();

        if(type == "list") {
            category_view.initView(type, cols, 'btn-list');
        }

        if(type == 'grid') {
            category_view.initView(type, cols, 'btn-grid-' + cols);
        }
    } else {
        var type = localStorage.getItem('type');
        var cols = localStorage.getItem('cols');
        var element = localStorage.getItem('element');

        category_view.initView(type, cols, element);
    }
});

var category_view = {
    'initView' : function (type, cols, element) {
        category_view.changeView(type, cols, element);
    },

    'changeView' : function (type, cols, element) {
        if(type == "grid") {
            var column = parseInt(cols);
            if(column == 2) {
                $('#content .item-inner').attr('class', 'product-layout product-grid col-lg-6 col-md-6 col-sm-12 col-xs-12 item-inner two-items');
            }
            if(column == 3) {
                $('#content .item-inner').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-12 col-xs-12 item-inner three-items');
            }
            if(column == 4) {
                $('#content .item-inner').attr('class', 'product-layout product-grid col-lg-3 col-md-3 col-sm-12 col-xs-12 item-inner four-items');
            }
            if(column == 5) {
                $('#content .item-inner').attr('class', 'product-layout product-grid col-lg-divide-5 col-md-divide-5 col-sm-12 col-xs-12 item-inner five-items');
            }
			$('.products-container .image').removeClass('col-xs-4');
            $('.products-container .product-inner').removeClass('col-xs-8');
            $('.products-container .product-thumb').removeClass('row');
        }

        if(type == "list") {
            $('#content .item-inner').attr('class', 'product-layout product-list col-xs-12 item-inner');
            $('.products-container .image').addClass('col-xs-4');
            $('.products-container .product-inner').addClass('col-xs-8');
            $('.products-container .product-thumb').addClass('row');
        }

        $('.btn-custom-view').removeClass('active');
        $('.' + element).addClass('active');

        localStorage.setItem('type', type);
        localStorage.setItem('cols', cols);
        localStorage.setItem('element', element);
    }
}