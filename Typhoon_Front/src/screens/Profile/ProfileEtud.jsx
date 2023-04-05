import React, { useState } from 'react';
import './ProfileEtud.css';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import profileimg from '../../assets/profil.png';
import Avatar from 'react-avatar-edit';
import location from '../../assets/location.png';
import mobile from '../../assets/mobile.png';
import ProgressBarProfile from '../../components/ProfileProgressBar/ProgressBar';
const ProfileEtud = () => {
  const [image, setImage] = useState('');
  const [imageCrop, setimageCrop] = useState('');
  const [src, setSrc] = useState(false);
  const [profile, setProfile] = useState([]);
  const [pview, setPview] = useState(false);
  const profileFinal = profile.map((item) => item.pview);

  const onClose = () => {
    setPview(null);
  };

  const onCrop = (view) => {
    setPview(view);
  };

  const saveCropImage = () => {
    setProfile([...profile, { pview }]);
    setimageCrop(false);
  };

  return (
    <div className="profileEtud-container">
      <div className="item1">
        <div className="profile_img">
          <div className="flex">
            <div className="image_container">
              <img
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid #DAF5FF',
                  margin: '1.5rem',
                  cursor: 'pointer',
                }}
                src={profileFinal.length ? profileFinal : profileimg}
                onClick={() => setimageCrop(true)}
                alt=""
              />
              <label htmlFor="">Bouthaina BEN Hamida</label>
            </div>
            <div className="pers-info">
              <div>
                <img
                  src={location}
                  style={{
                    width: '20px',
                    height: '20px',
                    marginRight: '.5rem',
                  }}
                />
                <p>Tunisia</p>
              </div>
              <div>
                <img
                  src={mobile}
                  style={{
                    width: '20px',
                    height: '20px',
                    marginRight: '.5rem',
                  }}
                />
                <p>54 069 903</p>
              </div>
              <div
                style={{
                  backgroundColor: '#B2B2B2',
                  height: '1px',
                  width: '200px',
                }}
              ></div>
              <div>
                <p>Communauté</p>
              </div>
              <div>
                <p>Classe</p>
              </div>
              <div>
                <p>Loisirs</p>
              </div>
              <button>Modifier le profil</button>
            </div>

            <Dialog
              visible={imageCrop}
              header={() => {
                <p className="text-2x1 font-semibold textColor">
                  Update profile
                </p>;
              }}
              onHide={() => setimageCrop(false)}
              className="dialog-window"
            >
              <div className="confirmation-content">
                <Avatar
                  width={500}
                  height={400}
                  onCrop={onCrop}
                  onClose={onClose}
                  src={src}
                  shadingColor={'#121212'}
                  backgroundColor={'#121212'}
                />
                <div className=" flex flex-column align-items-center mt-5 wW-12">
                  <div className="flex justify-content-around w-12 mt-4">
                    <Button
                      onClick={saveCropImage}
                      label="Save"
                      icon="pi pi-check"
                    />
                  </div>
                </div>
              </div>
            </Dialog>

            <InputText
              type="file"
              accept="/image/*"
              style={{ display: 'none' }}
              onChange={(event) => {
                const file = event.target.files[0];
                if (file && file.type.substring(0, 5) === 'image') {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="item item2">
        <div
          style={{
            height: '250px',
            overflowY: 'auto',
            scrollBehavior: 'smooth',
          }}
        >
          <ProgressBarProfile
            color="#B0DAFF"
            nomModule="Génie logiciel"
            progres={30}
          />
          <ProgressBarProfile
            color="#A4BC92"
            nomModule="Réseaux locaux"
            progres={10}
          />
          <ProgressBarProfile
            color="#245953"
            nomModule="Modélisation"
            progres={80}
          />
          <ProgressBarProfile
            color="#FFF2CC"
            nomModule="Java Avancé"
            progres={70}
          />
        </div>
      </div>
      <div className="item item3">
        <p>A réviser..</p>
      </div>
    </div>
  );
};

export default ProfileEtud;
