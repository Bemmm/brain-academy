/* product_browse_square.js */
$(document).ready(function(){
	var pbi = browse.initPager();
	browse.initGrid(pbi);
	browse.initResize();
	browse.lazyImages(pbi);
	initFilter(filter);
});
var filter= [
    		    {
    		        "filters":[
    		           {
    		              "filterName":"Men's",
    		              "filterOsr":"MENS",
    		              "filterItems":[
    		                 {
    		                    "value":"FAN_CUFFLINKS1_LE021",
    		                    "key":"productOsr",
    		                    "type":"MENS"
    		                 },
    		                 {
    		                    "value":"FAN_PENDANT2_LE025",
    		                    "key":"productOsr",
    		                    "type":"MENS"
    		                 },
    		                 {
    		                    "value":"FAN_PENDANT2_LE025",
    		                    "key":"productOsr",
    		                    "type":"MENS"
    		                 },
    		                 {
    		                    "value":"FAN_RING1_LE017",
    		                    "key":"productOsr",
    		                    "type":"MENS"
    		                 }
    		              ]
    		           },
    		           {
    		              "filterName":"Women's",
    		              "filterOsr":"WOMENS",
    		              "filterItems":[
    		                 {
    		                    "value":"FAN_PENDANT1_LE019",
    		                    "key":"productOsr",
    		                    "type":"WOMENS"
    		                 },
    		                 {
    		                    "value":"FAN_PENDANT2_LE025",
    		                    "key":"productOsr",
    		                    "type":"WOMENS"
    		                 },
    		                 {
    		                    "value":"FAN_PENDANT2_LE025",
    		                    "key":"productOsr",
    		                    "type":"WOMENS"
    		                 },
    		                 {
    		                    "value":"FAN_RING2_LE018",
    		                    "key":"productOsr",
    		                    "type":"WOMENS"
    		                 },
    		                 {
    		                    "value":"FAN_CHARM1_LE023",
    		                    "key":"productOsr",
    		                    "type":"WOMENS"
    		                 },
    		                 {
    		                    "value":"FAN_EARRINGS1_LE020",
    		                    "key":"productOsr",
    		                    "type":"WOMENS"
    		                 },
    		                 {
    		                    "value":"FAN_BRACELET1_LE022",
    		                    "key":"productOsr",
    		                    "type":"WOMENS"
    		                 }
    		              ]
    		           }
    		        ],
    		        "filterGroupOsr":"01-GENDER",
    		        "filterGroupName":"Gender"
    		     },
    		     {
    		        "filters":[
    		           {
    		              "filterName":"Bracelets",
    		              "filterOsr":"BRACELET",
    		              "filterItems":[
    		                 {
    		                    "value":"FAN_BRACELET1_LE022",
    		                    "key":"productOsr",
    		                    "type":"BRACELET"
    		                 }
    		              ]
    		           },
    		           {
    		              "filterName":"Charms",
    		              "filterOsr":"CHARM",
    		              "filterItems":[
    		                 {
    		                    "value":"FAN_CHARM1_LE023",
    		                    "key":"productOsr",
    		                    "type":"CHARM"
    		                 }
    		              ]
    		           },
    		           {
    		              "filterName":"Cufflinks",
    		              "filterOsr":"CUFFLINK",
    		              "filterItems":[
    		                 {
    		                    "value":"FAN_CUFFLINKS1_LE021",
    		                    "key":"productOsr",
    		                    "type":"CUFFLINK"
    		                 }
    		              ]
    		           },
    		           {
    		              "filterName":"Earrings",
    		              "filterOsr":"EARRINGS",
    		              "filterItems":[
    		                 {
    		                    "value":"FAN_EARRINGS1_LE020",
    		                    "key":"productOsr",
    		                    "type":"EARRINGS"
    		                 }
    		              ]
    		           },
    		           {
    		              "filterName":"Necklaces",
    		              "filterOsr":"NECKLACE",
    		              "filterItems":[
    		                 {
    		                    "value":"FAN_PENDANT1_LE019",
    		                    "key":"productOsr",
    		                    "type":"NECKLACE"
    		                 },
    		                 {
    		                    "value":"FAN_PENDANT2_LE025",
    		                    "key":"productOsr",
    		                    "type":"NECKLACE"
    		                 },
    		                 {
    		                    "value":"FAN_PENDANT2_LE025",
    		                    "key":"productOsr",
    		                    "type":"NECKLACE"
    		                 }
    		              ]
    		           },
    		           {
    		              "filterName":"Rings",
    		              "filterOsr":"RING",
    		              "filterItems":[
    		                 {
    		                    "value":"FAN_RING1_LE017",
    		                    "key":"productOsr",
    		                    "type":"RING"
    		                 },
    		                 {
    		                    "value":"FAN_RING2_LE018",
    		                    "key":"productOsr",
    		                    "type":"RING"
    		                 }
    		              ]
    		           }
    		        ],
    		        "filterGroupOsr":"03-PRODUCT-TYPE",
    		        "filterGroupName":"Product"
    		     }
    		  ]
var browse = {
	current: 0,
	productDim: {
		height: 167,
		width: 207
	},
	hoverDim: {
		height: 275,
		width: 302
	},
	initGrid: function(pbi) {
		var margin = {
			left: Math.round((browse.productDim.width - browse.hoverDim.width) / 2),
			top: Math.round((browse.productDim.height - browse.hoverDim.height) / 2)
		};
		var deltaWidth = browse.productDim.width - browse.hoverDim.width;
		var deltaHeight = browse.productDim.height - browse.hoverDim.height;
		// only pop if the first one - using selector logic.
		var initialClass = "ul.products:eq(" + pbi + "):eq(0) li.featured:first";
		var photogridSettings = {
			selectedCSS: {
				"margin-left": margin.left + 'px',
				"margin-top": margin.top + 'px',
				width: browse.hoverDim.width + 'px',
				height: browse.hoverDim.height + 'px',
				opacity: 1
			},
			initialClass: initialClass,
			hoverCallback: browse.hoverElement,
			hoverCheck: browse.hoverCheck,
			clickCallback: browse.clickElement,
			deltaWidth: deltaWidth,
			deltaHeight: deltaHeight
		};
		$(".productView div.description").each(function() {
			var h = $("div.name", this).height();
			if (h > 28) {
				$(this).addClass("three-line");
			}
			else if (h > 14) {
				$(this).addClass("two-line");
			}
		});
		var $pg = $('.products').jphotogrid(photogridSettings);
		return $pg;
	},
	initPager: function() {
		// remove previous hovers
		browse.hoverRemove();
		browse.positionPager();
		var pbi = $.cookie('pbi');
		if (!pbi) {
			pbi = 0;
		} else {
			pbi = parseInt(pbi, 10);
		}
		browse.page(pbi);
		return pbi;
	},
	initResize: function() {
		$(window).resize(browse.positionPager);
	},

	// hide/show next prev buttons
	pageStatus: function(pbi) {
		$.cookie('pbi', pbi);
		var $ps = $(".pageSelectorControls");
		$("a.selected", $ps).removeClass("selected");
		$("a:eq(" + pbi + ")", $ps).addClass("selected");
		var size = $(".pageSelectorControls:first a").size();
		if (size < 2) {
			$ps.hideVis();
		} else {
			$ps.showVis();
		}
		if (pbi>0) {
			$("#leftPager").show();
		} else {
			$("#leftPager").hide();
		}
		if (pbi<size-1) {
			$("#rightPager").show();
		} else {
			$("#rightPager").hide();
		}
		browse.positionPager();
	},
	page: function(pbi) {
		// prevents hover effect
		browse.paging = true;

		// remove previous hovers
		browse.hoverRemove();

		// show selected page
		browse.pageStatus(pbi);

		// load the images for the next wave
		browse.lazyImages(pbi);

		// scroll view to proper page
		var h = - pbi * 928 + "px";
		$("#pageScroller").animate({"margin-left": h}, browse.pageComplete);
		browse.current = pbi;
		return false;
	},
	pageComplete: function() {
		// remove previous hovers
		browse.hoverRemove();

		// enables hover effect
		browse.paging = false;
	},
	delta: function(d) {
		return browse.page(browse.current + d);
	},
	lazyImages: function(i) {
		var products = $("#pageScroller .products:nth(" + i + ")");
		$("img.thumb[data-lazyimages-src]", products).each(browse.lazyLoad);
	},
	hoverElement: function(el) {
		$("img.hover[data-lazyimages-src]", el).each(browse.lazyLoad);
	},
	clickElement: function(el) {
		var href = $("a.dialogButton", this).attr("href");
		if (href) {
			window.location = href;
		}
	},
	lazyLoad: function() {
		var src = $(this).attr("data-lazyimages-src");
		$(this).attr("src", src).removeAttr("data-lazyimages-src");
	},
	hoverCheck: function() {
		// whether hover is "alive"
		return !browse.paging;
	},
	hoverRemove: function() {
		$('.productView.selected').remove();
	},
	positionPager: function() {
		$(".pager").css("visibility", "hidden");
		pager.position("#productsPager");
		$(".pager").css("visibility", "visible");
	}
};
function initFilter(filter){
	for(i=0; i<filter.length;i++){
		var newElement = document.createElement('ul');
		var newTitle = document.createElement('h5');
		newTitle.innerHTML = filter[i].filterGroupName;
		newElement.appendChild(newTitle);
		for(j=0; j<filter[i].filters.length;j++){
			if(filter[i].filters[j].filterName){

				var newInput = document.createElement('input');
				newInput.id = filter[i].filters[j];
				newInput.setAttribute('type', 'checkbox');
				var newLi = document.createElement('li');
				newLi.appendChild(newInput);
				var newTextNode = document.createTextNode(filter[i].filters[j].filterName);
				newLi.appendChild(newTextNode);
				// newLi.innerHTML = filter[i].filters[j].filterName;
				newElement.appendChild(newLi);
			}
		}
		$('.jos-filter-list')[0]
		document.getElementsByClassName('jos-filter-list')[0].appendChild(newElement);
	}

	function createElement(){

	};
};
/*<ul>
<h5>Stone Cut</h5>

<li><label for="STN-CUT-FACET_list"><input id="STN-CUT-FACET_list" class="jos-product-browse-filter-item" name="jos-product-browse-filters" type="checkbox" value="STN-CUT-FACET"> Facet</label></li>

<li><label for="STN-CUT-SMOOTH_list"><input id="STN-CUT-SMOOTH_list" class="jos-product-browse-filter-item" name="jos-product-browse-filters" type="checkbox" value="STN-CUT-SMOOTH"> Smooth</label></li>

</ul>*/