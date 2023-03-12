import { Avatar } from 'react-avatar-generator';

function ManAvatar() {
  return (
    <div style={{ width: '200px', height: '200px' }}>
      <Avatar
        width={200}
        height={200}
        hairColor={'#4a4a4a'}
        hairLength={'medium'}
        hairDensity={'medium'}
        skinColor={'#efd9ca'}
        shirtColor={'#6a8caf'}
        pantColor={'#414d5a'}
        shoeColor={'#2e2e2e'}
        facialHairType={'mediumBeard'}
        facialHairColor={'#4a4a4a'}
        eyeType={'default'}
        eyebrowType={'default'}
        mouthType={'default'}
        noseType={'default'}
      />
    </div>
  );
}
export default ManAvatar;