// MAIN CONFIG
var editor = grapesjs.init({
    height: '100%',
    showDevices:true,
    showOffsets: 1,
    noticeOnUnload: 0,
    storageManager: { autoload: 0 },
    container: '#gjs',
    fromElement: true,
    components: '<div style="min-height: 100px" class="container-fluid"></div>',
    canvas: {
        styles: [
            './css/bootstrap.css',
            './css/style.css'
        ],
        scripts: [
            './js/jquery-3.3.1.min.js',
            './js/popper.min.js',
            './js/bootstrap.js'
        ]
    },
    // MANAGES PLUGINs
    plugins: [
        'grapesjs-lory-slider',
        'grapesjs-tabs',
        'gjs-blocks-basic',
        'gjs-plugin-export',
        'gjs-blocks-flexbox'
    ],
    pluginsOpts: {
        'grapesjs-lory-slider':{},
        'grapesjs-tabs':{},
        'gjs-blocks-basic':{},
        'gjs-blocks-flexbox' :{},
        'gjs-plugin-export':{
            btnLabel: 'EXPORT'
        }
    }
});

// ADDS TOOLS TO SIDEBAR
var blockManager = editor.BlockManager;
blockManager.add('carousel', {
    category: "Web Serv Tools",
    label: 'Carousel',
    content: '<div id="carouselExampleIndicators" style="min-height: 100px;" class="carousel slide" data-ride="carousel" >'+
    '<ol class="carousel-indicators">'+
    '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'+'' +
    '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'+
    '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'+
    '</ol>'+
    '<div style="min-height: 100px;" class="carousel-inner">'+
    '<div style="min-height: 100px;" class="carousel-item active">'+
    '<img class="d-block w-100" src="" alt="First slide">' +
    '</div>' +
    '<div style="min-height: 100px;" class="carousel-item">' +
    '<img class="d-block w-100" src="" alt="Second slide">' +
    '</div>'+
    '<div style="min-height: 100px;" class="carousel-item">' +
    '<img class="d-block w-100" src="" alt="Third slide">' +
    '</div>' +
    '</div>' +
    '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'+
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Previous</span>' +
    '</a>' +
    '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">' +
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Next</span>' +
    '</a>' +
    '</div>'
    });
blockManager.add('container', {
    category: "Web Serv Tools",
    label: 'Container',
    content: '<div style="min-height: 100px" class="container-fluid"></div>',
    attributes: {
        class: "gjs-fonts gjs-f-b1"
    }
});
blockManager.add('row', {
    category: "Web Serv Tools",
    label: 'Row',
    content: '<div style="min-height: 100px" class="row"></div>'
});
blockManager.add('2 columns', {
    category: "Web Serv Tools",
    label: '2 Columns',
    content: '<div class="row" style="min-height: 100px">'+
    '<div class="col-sm" style="min-height: 100px">'+
    '<p>Testing Text</p>'+
    '</div>'+
    '<div class="col-sm" style="min-height: 100px">'+
    '<p>Testing Text</p>'+
    '</div>'+
    '</div>',
    attributes: {
        class: "gjs-fonts gjs-f-b2"
    }
});
blockManager.add('3 columns', {
    category: "Web Serv Tools",
    label: '3 Columns',
    content: '<div class="row" style="min-height: 100px">'+
    '<div class="col-sm" style="min-height: 100px">'+
    '<p>Testing Text</p>'+
    '</div>'+
    '<div class="col-sm" style="min-height: 100px">'+
    '<p>Testing Text</p>'+
    '</div>'+
    '<div class="col-sm" style="min-height: 100px">'+
    '<p>Testing Text</p>'+
    '</div>'+
    '</div>',
    attributes: {
        class: "gjs-fonts gjs-f-b3"
    }
});


// STYLEMANAGER
var styleManager = editor.StyleManager;

styleManager.addSector('Dimension',{
    name: 'Dimension',
    properties: [{ name: 'Width',
        property: 'width',
        type: 'integer',
        units: ['px', '%'],
        defaults: 'auto',
        min: 0
    }]
});

// CUSTOM TEXTEDITOR
var rte = editor.RichTextEditor;
const action = [rte.remove('bold'),rte.remove('italic'),rte.remove('underline'),rte.remove('strikethrough'),rte.remove('link')];

 rte.add('strong', {
        icon: '<strong>B</strong>',
        attributes: {title: 'Bold'},
        result: rte => {
            // rte.insertHTML(`<strong>${rte.selection()}</strong>`)
            rte.exec('bold')

        }
});

rte.add('italic',
    {
        icon: '<i>I</i>',
        attributes: {title: 'Italics'},
        result: rte => {
            rte.insertHTML(`<i>${rte.selection()}</i>`);
        }
});

rte.add('underline',
    {
        icon: '<u>U</u>',
        attributes: {title: 'Underline'},
        result: rte => {
        rte.insertHTML(`<u>${rte.selection()}</u>`);
    }
});

