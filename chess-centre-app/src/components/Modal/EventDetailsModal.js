import React from "react";
import { Modal, ModalBody, ModalFooter, Button } from "@windmill/react-ui";
import PrettyDate from "../../utils/DateFormating";

export default function EventDetailsModal(props) {
  const { entries, closeModal, open } = props;

  return (
    <>
      <Modal isOpen={open} onClose={() => closeModal()}>
        <ModalBody>
          <table className="mt-2 m-auto divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-left"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                >
                  Rounds
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {entries && entries.map(({ event }, key) => (
                <tr
                  key={key}
                  className={key % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {event.name}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {event.rounds}
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500 text-left">
                    {PrettyDate(event.startDate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ModalBody>
        <ModalFooter>
          <div className="text-center sm:text-left"><i className="fal fa-construction text-orange-500"></i> <span className="text-xs">We're working hard to improve this section!</span></div>
          <Button className="w-full sm:w-auto" onClick={closeModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}