const modal = `
  .modal-portal {
    position: relative;
  }

  .modal, #react-confirm-alert > div > div > div  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    position: absolute;
    top: 25%;
    left: 0;
    right: 0;
    margin: 0 auto;

    padding: 30px 20px;
    max-height: 260px;
    height: 100%;
    width: 100%;
    max-width: 360px;
    color: rgb(76, 30, 79) !important;

    outline: none;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid rgb(204, 204, 204);
    background-color: rgb(253, 235, 220);

    .close-modal-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      font-size: 1.6em;
      cursor: pointer;
      &:hover {
        filter: brightness(2);
      }

      * {
        pointer-events: none;
      }
    }
  }
  .modal-container, #react-confirm-alert > div > div > div  {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;

    height: 100%;
    
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-family: 'Lato', sans-serif;

    h2 {
      font-size: 1.5rem;
    }
    > div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: initial;
      gap: 28px;
    }
    button {
      padding: 8px 16px;
      
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: 2px;

      border: none;
      cursor: pointer;
      color: rgb(253, 235, 220);
      background-color: rgb(76, 30, 79);

      &:hover {
        filter: brightness(1.3);
      }
      &.return-btn {
        color: rgb(76, 30, 79);
        background-color: transparent;
      }
      &.delete-btn {
        min-width: 166.6px;
        background-color: rgb(95, 72, 224);
        color: white;
      }
    }
  }
  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.75);
  }

`;

export default modal;
