 function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result)
                        .width('100%')
                        .height(auo);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }