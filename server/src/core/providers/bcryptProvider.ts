export interface BcryptProvider {
  hash(data: string, saltOrRounds: string | number): Promise<String>
  compare(data: string, encrypted: string): Promise<Boolean>
}
