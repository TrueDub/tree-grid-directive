describe('Filters', function () { //describe your object type
    beforeEach(angular.mock.module('treeGrid')); //load module

    describe('searchFor', function () { //describe your app name

        var searchFor;
        beforeEach(inject(function ($filter) { //initialize your filter
            reverse = $filter('searchFor', {});
        }));

        var arr = [{
            "children": [
                {
                    "children": null,
                    "text": "child1",
                    "root": false,
                },
                {
                    "children": null,
                    "text": "child2",
                    "root": false
                }
            ],
            "text": "data",
            "root": true,
        }];

        it('Should find a simple string', function () {  //write tests
            expect(searchFor(arr,'data',null,[],true)).toBe('lihar');
        });

    });

});
