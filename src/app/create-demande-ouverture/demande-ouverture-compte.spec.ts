import { DemandeOuvertureCompte } from './demande-ouverture-compte';

describe('DemandeOuvertureCompte', () => {
  it('should create an instance', () => {
    expect(new DemandeOuvertureCompte('','','',null, null)).toBeTruthy();
  });
});
