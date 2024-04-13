import React from 'react';

const InfoPopup = () => {
    const closeModal = () => {
        // Find the modal element
        const modal = document.getElementById('info-popup');
        // Hide the modal by adding the 'hidden' class
        modal.classList.add('hidden');
    };
      
    const confirmAction = () => {
        // Perform the action you want to execute when the user confirms
        // For example, you can submit a form, make an API request, etc.
        console.log('Confirmed action!');
        // Then close the modal
        closeModal();
    };
    
  return (
    <div id="info-popup" tabIndex="-1" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
      <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
          <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">Privacy info</h3>
            <p>
              The backup created with this export functionality may contain some sensitive data. We suggest you save this archive in a secured location.
            </p>
          </div>
          <div className="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
            <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Learn more about privacy</a>
            <div className="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
              <button id="close-modal" type="button" onClick={closeModal} className="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
              <button id="confirm-button" type="button" onClick={confirmAction} className="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;
