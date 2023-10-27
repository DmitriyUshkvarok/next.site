'use client';
import Image from 'next/image';
import { useState } from 'react';
import { RiFileEditFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';

const AdminAboutWorkItem = ({ works }) => {
  const [isPendings, setIsPendings] = useState({});
  return (
    <>
      {works &&
        works?.map((work) => (
          <li key={work._id} className="styles.workListItem">
            <Image
              src={`${work?.image}`}
              alt="work photo"
              sizes="100vw"
              width={200}
              height={200}
              className="styles.workListImage"
            />
            <div className="styles.workListInfoWrapper">
              <h3 className="styles.workListInfoWrapperTitle">
                {work.enterprise}
              </h3>
              <p className="styles.workListInfoWrapperData">{work.data}</p>
              <h3 className="styles.workListInfoWrapperRegion">
                {work.region}
              </h3>
              <ul className="styles.workListInfoWrapperList">
                {work.position.map((pos, index) => (
                  <li key={index}>{pos}</li>
                ))}
              </ul>
            </div>
            <div className="styles.adminChangePanel">
              <div
                className="styles.adminChangePanelItem"
                //   onClick={() => handleEditClick(item)}
              >
                <RiFileEditFill size={20} color="green" />
              </div>
              <div
                className="styles.adminChangePanelItem"
                onClick={() => handleDelete(item._id)}
              >
                {/* {isPendings[item._id] ? (
            'Loading...'
          ) : ( */}
                <AiFillDelete size={20} color="red" />
                {/* // )} */}
              </div>
            </div>
          </li>
        ))}
    </>
  );
};

export default AdminAboutWorkItem;
