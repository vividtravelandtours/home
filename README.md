#Vivid Travel & Tours

#### References:
- Mutate Image Asset: https://graphcms.com/docs/tutorials/manually-uploading-assets/

#### Email Information
- Service:  GMAIL
- Email:    vividtravelandtours.noreply@gmail.com
- Password: vividtravelandtours

#Github Account
- Username: vividtravelandtours
- Email: vividtravelandtours.noreply@gmail.com
- Password: kLrBFFC7NL3MFeC

#### Getting the GraphCMS ApiKey
{
    viewer {
        project(id: "ee2281c603294f8b9912f6e6b543e5f5") {
            stage(name: "master") {
                assetConfig {
                    apiKey
                }
            }
        }
    }
}

#### NPM package
- npm install uniqid

##### Sample Axios Request to save assets to Filestack
Axios.post('https://www.filestackapi.com/api/store/S3?key=AqTusWlPTMuGVWthlX3tKz&path=/ee2281c603294f8b9912f6e6b543e5f5-master/DSCN1550.jpg', {
    fileUpload: `C:\\Users\\Efraim\\Pictures\\All Pictures\\100NIKON\\DSCN1550.jpg`
}).then(console.log);

#### CURL
curl -X POST -F 'fileUpload=@"C:\Users\Efraim\Pictures\All Pictures\100NIKON\DSCN1550.jpg"' "https://www.filestackapi.com/api/store/S3?key=AqTusWlPTMuGVWthlX3tKz&path=/ee2281c603294f8b9912f6e6b543e5f5-master/DSCN1550.jpg"