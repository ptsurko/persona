/**
 * @fileOverview Image drop widget.
 * @author       Denis Shamgin
 */

(function ($) {
    $.widget('persona.imageDrop', {
        options: {
            maxSize: 1,
            imageClass: 'img-drop'
        },

        _size: 0, // container size limit

        _onDrop: function (event) {
            // TODO: consider multiple file drop (note: async loadend event)
            var maxSize = this.options.maxSize;
            var file = event.originalEvent.dataTransfer.files[0];
            var reader = new FileReader;
            var holder = this.element;
            var self = this;

            holder.removeClass('drop-over');

            if (!file || this._size >= maxSize) {
                event.preventDefault();
                return true;
            }

            reader.onloadend = function (e) {
                var dataUrl = e.target.result;
                $('<img/>')
                    .one('load', function () {
                        self._size++;
                        holder.append(this);
                        self._trigger('load', null, {
                            image: $(this),
                            container: holder,
                            data: dataUrl
                        });
                    })
                    .addClass(self.options.imageClass)
                    .attr('src', dataUrl);
            };

            reader.readAsDataURL(file);

            return false;
        },

        _onDragOver: function (event) {
            this.element.addClass('drop-over');
            return false;
        },

        _onDragLeave: function (event) {
            this.element.removeClass('drop-over');
            return false;
        },

        _create: function () {
            this.element.addClass('drop');

            this._on(this.element, {
                drop: '_onDrop',
                dragover: '_onDragOver',
                dragleave: '_onDragLeave'
            });
        },

        _destroy: function () {
            this.element.removeClass('drop');
            this._off(this.element, 'drop dragover dragleave');
        }
    });
})(jQuery);
