import {
  AppleInc,
  NvidiaCorporation,
  BroadcomInc,
  ASMLHolding,
  AdobeInc,
  TexasInstrumentsIncorporated,
  AdvancedMicroDevicesInc,
  QualcommIncorporated,
  IntuitInc,
  AppliedMaterialsInc,
  AnalogDeviceInc,
  LamResearchCorppration,
  MicronTechnologyINC,
  PaloAltoNetworksINC,
  SynopsysInc,
  otherCompanies,
} from '../pages';

export default function filterObjectsById(objects, id) {
  return objects.filter((object) => id.includes(object.symbol));
}

export const filterCompany = (company, stockMaterials) => {
  let item;
  switch (company) {
    case 'AppleInc':
      item = filterObjectsById(stockMaterials, AppleInc);
      break;
    case 'NvidiaCorporation':
      item = filterObjectsById(stockMaterials, NvidiaCorporation);
      break;
    case 'BroadcomInc':
      item = filterObjectsById(stockMaterials, BroadcomInc);
      break;
    case 'ASMLHolding':
      item = filterObjectsById(stockMaterials, ASMLHolding);
      break;
    case 'AdobeInc':
      item = filterObjectsById(stockMaterials, AdobeInc);
      break;
    case 'TexasInstrumentsIncorporated':
      item = filterObjectsById(stockMaterials, TexasInstrumentsIncorporated);
      break;
    case 'AdvancedMicroDevicesInc':
      item = filterObjectsById(stockMaterials, AdvancedMicroDevicesInc);
      break;
    case 'QualcommIncorporated':
      item = filterObjectsById(stockMaterials, QualcommIncorporated);
      break;
    case 'AppliedMaterialsInc':
      item = filterObjectsById(stockMaterials, AppliedMaterialsInc);
      break;
    case 'IntuitInc':
      item = filterObjectsById(stockMaterials, IntuitInc);
      break;
    case 'LamResearchCorppration':
      item = filterObjectsById(stockMaterials, LamResearchCorppration);
      break;
    case 'MicronTechnologyINC':
      item = filterObjectsById(stockMaterials, MicronTechnologyINC);
      break;
    case 'PaloAltoNetworksINC':
      item = filterObjectsById(stockMaterials, PaloAltoNetworksINC);
      break;
    case 'SynopsysInc':
      item = filterObjectsById(stockMaterials, SynopsysInc);
      break;
    case 'otherCompanies':
      item = filterObjectsById(stockMaterials, otherCompanies);
      break;
    case 'AnalogDeviceInc':
      item = filterObjectsById(stockMaterials, AnalogDeviceInc);
      break;
    case 'allCompanies':
      item = stockMaterials;
      break;
    default:
      item = stockMaterials;
      break;
  }

  return item;
};
