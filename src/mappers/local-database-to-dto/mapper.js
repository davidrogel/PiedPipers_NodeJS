import _ from 'lodash';
import CoordinatesToLocationMapper from '../coordinates-to-location';
import ContactMethodMapper from '../contact-method';
import { Local } from '../../dto';

export default model => {
  if (_.isNil(model)) {
    return null;
  }
  const { cuid, dateAdded, name, location, price, contact, photos, description } = model;
  const locationDTO = CoordinatesToLocationMapper(location);
  const contactDTO = ContactMethodMapper(contact);
  return Local.DTO(cuid, dateAdded, name, locationDTO, price, contactDTO, photos, description);
};
