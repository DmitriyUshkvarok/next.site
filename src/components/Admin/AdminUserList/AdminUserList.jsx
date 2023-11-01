'use client';
import Image from 'next/image';
import styles from './adminUserList.module.css';
import { fredericka } from '@/src/app/fonts';
import { RiFileEditFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import { deleteUser, updateUserRole } from '@/src/actions/authActions';
import { useState } from 'react';

const AdminUserList = ({ users }) => {
  const [isPendings, setIsPendings] = useState({});
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUserRole, setEditedUserRole] = useState('');
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);

  const startEditRole = (userId, userRole) => {
    setEditingUserId(userId);
    setEditedUserRole(userRole);
  };

  const saveEditedRole = async () => {
    try {
      setIsLoadingEdit(true);
      if (!editingUserId) {
        // Если нет активного пользователя для редактирования, не выполнять обновление
        return;
      }

      const response = await updateUserRole(editingUserId, editedUserRole);

      if (response.error) {
        // Обработка ошибки при обновлении роли пользователя, если это необходимо
        console.error(response.error);
      } else {
        // Успешное обновление роли пользователя
        setEditingUserId(null);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingEdit(false);
    }
  };

  const handleDelete = async (userId) => {
    try {
      setIsPendings((prevState) => ({
        ...prevState,
        [userId]: true,
      }));

      await deleteUser(userId);

      setIsPendings((prevState) => ({
        ...prevState,
        [userId]: false,
      }));
    } catch (error) {
      setIsPendings((prevState) => ({
        ...prevState,
        [userId]: false,
      }));
    }
  };

  return (
    <div className={fredericka.className}>
      <h1 className={styles.adminUserTitle}>Edit Admin User List</h1>
      <ul className={styles.adminUserList}>
        {users?.map((item) => (
          <li key={item._id}>
            <div className={styles.container}>
              <div className={styles.sidebar}>
                <Image
                  src={
                    item.image ||
                    'https://lh3.googleusercontent.com/a/ACg8ocIB2RvSxdtbNeWuoxG6E1aDP3Ursso6Mem3DSSyQQDN=s96-c'
                  }
                  alt="user avatar"
                  width={100}
                  height={100}
                  className={styles.userImage}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.contentName}>
                  <span className={styles.contentSpan}>Name:</span>
                  {item.name}
                </p>
                <p className={styles.contentEmail}>
                  <span className={styles.contentSpan}>Email:</span>
                  {item.email}
                </p>
                {editingUserId === item._id ? (
                  <div className={styles.contentRoleEditPanel}>
                    <input
                      type="text"
                      value={editedUserRole}
                      onChange={(e) => setEditedUserRole(e.target.value)}
                      className={styles.contentRoleInput}
                    />
                    <button
                      onClick={saveEditedRole}
                      className={styles.contentRoleBtnSave}
                    >
                      {isLoadingEdit ? 'Loading...' : 'Save'}
                    </button>
                  </div>
                ) : (
                  <p className={styles.contentRole}>
                    <span className={styles.contentSpan}>Role:</span>{' '}
                    {item.role}
                    <RiFileEditFill
                      color="lightgreen"
                      style={{ marginLeft: '30px', cursor: 'pointer' }}
                      onClick={() => startEditRole(item._id, item.role)} // Начать редактирование роли
                    />
                  </p>
                )}
                <p className={styles.contentProvider}>
                  <span className={styles.contentSpan}>Provider:</span>
                  {item.provider}
                </p>
                <p className={styles.contentDate}>
                  <span className={styles.contentSpan}>Date Registration:</span>
                  {new Date(item.createdAt).toLocaleDateString().slice(0, 10)}
                </p>
                <p className={styles.contentUpdate}>
                  <span className={styles.contentSpan}>Date Update:</span>
                  {new Date(item.updatedAt).toLocaleDateString().slice(0, 10)}
                </p>
                {isPendings[item._id] ? (
                  <p>Loading...</p>
                ) : (
                  <p
                    className={styles.contentDeletePanel}
                    onClick={() => handleDelete(item._id)}
                  >
                    <span className={styles.contentSpan}>Delete User</span>
                    <AiFillDelete size={30} color="red" />
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUserList;
