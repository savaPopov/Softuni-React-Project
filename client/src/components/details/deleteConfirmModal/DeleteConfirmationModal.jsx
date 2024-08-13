import React from 'react';
import styles from './DeleteConfirmationModal.module.css';

export default function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-container']}>
        <h2 className={styles['modal-title']}>Confirm Deletion</h2>
        <p className={styles['modal-message']}>Are you sure you want to delete this post? This action cannot be undone.</p>
        <div className={styles['modal-buttons']}>
          <button className={styles['confirm-button']} onClick={onConfirm}>Delete</button>
          <button className={styles['cancel-button']} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}