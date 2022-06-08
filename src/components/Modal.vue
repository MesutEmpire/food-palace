<template>

    <div id="popup-modal" tabindex="-1"
        class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="popup-modal">

                </button>
                <div class="p-6 text-center">
                    <div class="grid md:grid-cols-5 p-4  ">
                        <div class="md:col-span-2 items-center rounded-lg ">
                            <img class="h-96 w-96 object-contain md:object-scale-down">
                        </div>
                        <div>
                            <h1></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>