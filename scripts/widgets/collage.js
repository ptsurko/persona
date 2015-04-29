(function (global, $) {

    $.widget('persona.collage', {
        options: {

        },

        _zIndex: 1,

        _create: function () {
            var $element = this.element;

            $element.imageDrop({
                maxSize: 8,
                imageClass: 'persona-collage-photo',
                load: $.proxy(this._onImageLoad, this)
            });

            $element
                .children('img')
                    .each(function () {
                        $(this).draggable({
                            containment: $element,
                            cursor: 'move',
                            scroll: false
                        });
                    });

            this._on({
                'mousedown img': this._onImageMouseDown
            })
        },

        _destroy: function () {

        },

        // Handlers

        _onImageMouseDown: function (e) {
            $(e.target).css({
                'z-index': this._zIndex++
            });
        },

        _onImageLoad: function (e, ui) {
            ui.image
                .css({
                    'z-index': this._zIndex++
                })
                .draggable({
                    containment: this.element,
                    cursor: 'move',
                    scroll: false
                });
        }
    });

})(this, jQuery);
