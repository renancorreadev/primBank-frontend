;(this.webpackJsonppassive = this.webpackJsonppassive || []).push([
  [0],
  {
    107: function (e, t, n) {
      e.exports = {
        content: 'styles_content__2NDLv',
        videoPlayer: 'styles_videoPlayer__10mAu',
      }
    },
    110: function (e, t, n) {
      e.exports = {
        bg: 'styles_bg__2PeEO',
        features: 'styles_features__3iI2Q',
        roadmap: 'styles_roadmap__HsyGx',
        howToBuy: 'styles_howToBuy__2qEyx',
        FeaturesB: 'styles_FeaturesB__1Xwju',
      }
    },
    173: function (e, t, n) {
      e.exports = {
        button: 'styles_button__2YsYr',
        textButton: 'styles_textButton__259Vz',
      }
    },
    175: function (e, t, n) {
      e.exports = {
        root: 'CustomCard_root__lrBHT',
        body: 'CustomCard_body__3JgWK',
      }
    },
    178: function (e, t, n) {},
    279: function (e, t, n) {
      e.exports = { logo: 'styles_logo__1kNJK' }
    },
    280: function (e, t, n) {
      e.exports = { subTitle: 'styles_subTitle__2sBZA' }
    },
    281: function (e, t, n) {
      e.exports = { title: 'styles_title__2fBRi' }
    },
    282: function (e, t, n) {
      e.exports = { subtitle: 'styles_subtitle__1ORz8' }
    },
    283: function (e, t, n) {
      e.exports = { SecondSubTitle: 'styles_SecondSubTitle__3i2sg' }
    },
    285: function (e, t, n) {
      e.exports = { comemnt: 'styles_comemnt__2Zx4t' }
    },
    286: function (e, t, n) {
      e.exports = { content: 'styles_content__2nh_x' }
    },
    287: function (e, t, n) {
      e.exports = { content: 'styles_content__3GgEP' }
    },
    294: function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]',
      )
    },
    295: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"newOwner","type":"address"},{"internalType":"address","name":"signer","type":"address"},{"internalType":"string","name":"contractURI","type":"string"},{"internalType":"string","name":"tokenURIPrefix","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"recipients","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"bps","type":"uint256[]"}],"name":"SecondarySaleFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"SignerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"SignerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addSigner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct ERC721Base.Fee[]","name":"fees","type":"tuple[]"}],"name":"calculateHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"fees","outputs":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getFeeBps","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getFeeRecipients","outputs":[{"internalType":"address payable[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isSigner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"components":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct ERC721Base.Fee[]","name":"_fees","type":"tuple[]"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct ERC721Base.Fee[]","name":"_fees","type":"tuple[]"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeSigner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceSigner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"contractURI","type":"string"}],"name":"setContractURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"tokenURIPrefix","type":"string"}],"name":"setTokenURIPrefix","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenURIPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct ERC721Base.Fee[]","name":"fees","type":"tuple[]"}],"name":"validationHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]',
      )
    },
    296: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"newOwner","type":"address"},{"internalType":"address","name":"signer","type":"address"},{"internalType":"string","name":"contractURI","type":"string"},{"internalType":"string","name":"tokenURIPrefix","type":"string"},{"internalType":"uint256","name":"royaltyFee","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"RoyaltyFeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"recipients","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"bps","type":"uint256[]"}],"name":"SecondarySaleFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"SignerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"SignerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_value","type":"string"},{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"}],"name":"URI","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addSigner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address[]","name":"_owners","type":"address[]"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"creators","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"fees","outputs":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getFeeBps","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getFeeRecipients","outputs":[{"internalType":"address payable[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isSigner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"components":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct ERC1155Base.Fee[]","name":"fees","type":"tuple[]"},{"internalType":"uint256","name":"supply","type":"uint256"},{"internalType":"string","name":"uri","type":"string"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeSigner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceSigner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"internalType":"uint256[]","name":"_values","type":"uint256[]"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setBaseRoyaltyFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"contractURI","type":"string"}],"name":"setContractURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"tokenURIPrefix","type":"string"}],"name":"setTokenURIPrefix","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenURIPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]',
      )
    },
    314: function (e, t, n) {},
    315: function (e, t, n) {},
    33: function (e, t, n) {
      e.exports = {
        bg: 'styles_bg__2VCvD',
        formTitle: 'styles_formTitle__1RPCw',
        parag: 'styles_parag__EzCcZ',
        title: 'styles_title__ugmmd',
      }
    },
    348: function (e, t) {},
    350: function (e, t) {},
    352: function (e, t) {},
    356: function (e, t) {},
    36: function (e, t, n) {
      e.exports = {
        title: 'styles_title__1TP9P',
        subtitle: 'styles_subtitle__z7f6h',
        subtitle_02: 'styles_subtitle_02__3qvE6',
        paragraph: 'styles_paragraph__19vTF',
        buttonBuy: 'styles_buttonBuy__LmSoo',
        sublim: 'styles_sublim__1CCos',
        bg: 'styles_bg__2PQmS',
        container_Banner: 'styles_container_Banner__WzIN2',
        subtitle_mobile: 'styles_subtitle_mobile__2tFHX',
      }
    },
    383: function (e, t) {},
    385: function (e, t) {},
    394: function (e, t) {},
    396: function (e, t) {},
    406: function (e, t) {},
    408: function (e, t) {},
    46: function (e, t, n) {
      e.exports = {
        content: 'styles_content__3UWW4',
        titleCard: 'styles_titleCard__39FS_',
        subTitleCard: 'styles_subTitleCard__2s6O0',
        box1: 'styles_box1__1Szp2',
      }
    },
    50: function (e, t, n) {
      e.exports = {
        darkHeading: 'WalletModal_darkHeading__2iOhP',
        heading: 'WalletModal_heading__2NRCd',
        grid: 'WalletModal_grid__2O0_-',
        divider: 'WalletModal_divider__3IsQS',
        root: 'WalletModal_root__2T2jv',
        learnText: 'WalletModal_learnText__fpVGK',
        darkTitle: 'WalletModal_darkTitle__20JxU',
        title: 'WalletModal_title__1Mn_O',
        walletBtn: 'WalletModal_walletBtn__1HEWd',
        darkWalletBtn: 'WalletModal_darkWalletBtn__1FUQO',
      }
    },
    527: function (e, t) {},
    529: function (e, t) {},
    536: function (e, t) {},
    537: function (e, t) {},
    62: function (e) {
      e.exports = JSON.parse(
      )
    },
    626: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        i,
        r = n(1),
        s = n.n(r),
        l = n(171),
        d = n.n(l),
        u = n(22),
        o = n(23),
        p = o.a.header(a || (a = Object(u.a)(['\n  background: #000000;\n']))),
        c = o.a.div(
          i ||
            (i = Object(u.a)([
              "\n  width: 1120px;\n  margin: 0 auto;\n\n  padding: 0 1rem 2rem;\n  nav {\n    position: relative;\n    top: 1.1rem;\n    ul {\n      a {\n        font-family: 'Montserrat', sans-serif;\n        color: #ffffff;\n        font-weight: 600;\n\n        transition: filter 0.3s;\n\n        &:hover {\n          filter: brightness(0.6);\n          color: white;\n        }\n      }\n    }\n\n    @media (min-width: 481px) and (max-width: 767px) {\n    }\n  }\n",
            ])),
        ),
        y = n.p + 'static/media/logo.99053b7c.svg',
        m = n(0)
      function f() {
        return Object(m.jsx)(p, {
          className: 'navbar navbar-expand-lg ',
          children: Object(m.jsx)(c, {
            children: Object(m.jsxs)('nav', {
              className: 'navbar  justify-content-between',
              children: [
                Object(m.jsx)('a', {
                  className: 'navbar-brand',
                  href: './',
                  children: Object(m.jsx)('img', { src: y, alt: 'logo' }),
                }),
                Object(m.jsxs)('ul', {
                  className: 'navbar-nav mr-auto mt-2 mt-lg-0',
                  children: [
                    Object(m.jsx)('a', {
                      href: './',
                      className: 'navbar-text nav-link',
                      children: 'Home',
                    }),
                    Object(m.jsx)('a', {
                      href: '#features',
                      className: 'navbar-text nav-link',
                      children: 'Features',
                    }),
                    Object(m.jsx)('a', {
                      href: '#roadmap',
                      className: 'navbar-text nav-link',
                      children: 'Road Map',
                    }),
                    Object(m.jsx)('a', {
                      href: '#how-to-buy',
                      className: 'navbar-text nav-link',
                      children: 'How to Buy',
                    }),
                    Object(m.jsx)('a', {
                      href: './whitePaper',
                      className: 'navbar-text nav-link',
                      children: 'White Paper',
                    }),
                  ],
                }),
              ],
            }),
          }),
        })
      }
      var b = n(289),
        g = n(29),
        T = n(36),
        _ = n.n(T),
        v = n(638),
        D = n.p + 'static/media/Title.5ce59695.png'
      function I() {
        return Object(m.jsx)(v.a, {
          md: 12,
          children: Object(m.jsx)('img', {
            className: _.a.title,
            src: D,
            alt: '',
          }),
        })
      }
      var V = n(639),
        S = n(640)
      function h() {
        return Object(m.jsx)(m.Fragment, {
          children: Object(m.jsx)(v.a, {
            md: 12,
            children: Object(m.jsx)(V.a, {
              children: Object(m.jsxs)(S.a, {
                children: [
                  Object(m.jsxs)(v.a, {
                    xs: 12,
                    children: [
                      ' ',
                      Object(m.jsx)('p', {
                        className:
                          _.a.subtitle + ' d-flex justify-content-center',
                        children:
                          'The PrimBank Protocol is a Community inspired DeFI Experiment',
                      }),
                    ],
                  }),
                  Object(m.jsxs)(v.a, {
                    xs: 12,
                    children: [
                      Object(m.jsxs)('p', {
                        className:
                          _.a.subtitle_02 + ' d-flex justify-content-center',
                        children: [' ', 'built on Binance Smart Chain'],
                      }),
                      Object(m.jsx)('p', {
                        className:
                          _.a.subtitle_mobile +
                          ' d-flex justify-content-center',
                        children:
                          'The PrimBank Protocol is a Community inspired DeFI Experiment, built on Binance Smart Chain',
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        })
      }
      function C() {
        return Object(m.jsx)(v.a, {
          md: 12,
          children: Object(m.jsx)('p', {
            className: _.a.paragraph + ' d-flex justify-content-center',
            children:
              'PrimBank tokens are the keys to your share of USDT held in the vault. Claim USDT',
          }),
        })
      }
      function L() {
        return Object(m.jsx)('button', {
          className: _.a.buttonBuy,
          children: 'Buy Now',
        })
      }
      n(314)
      function x() {
        return Object(m.jsxs)('div', {
          class: 'button-container-1',
          children: [
            Object(m.jsx)('span', { class: 'mas', children: 'Claim' }),
            Object(m.jsx)('button', {
              id: 'work',
              type: 'button',
              name: 'Hover',
              children: 'Claim',
            }),
          ],
        })
      }
      n(177)
      function P() {
        return Object(m.jsxs)('div', {
          className: _.a.btns + ' d-flex justify-content-center',
          children: [Object(m.jsx)(L, {}), Object(m.jsx)(x, {})],
        })
      }
      function E() {
        return Object(m.jsx)(m.Fragment, {
          children: Object(m.jsxs)('div', {
            className: _.a.container_Banner,
            children: [
              Object(m.jsx)(I, {}),
              Object(m.jsx)(h, {}),
              Object(m.jsx)(C, {}),
              Object(m.jsx)(P, {}),
            ],
          }),
        })
      }
      n(315)
      var k = n(279),
        R = n.n(k),
        N = n.p + 'static/media/Logo.81f37523.svg'
      function w() {
        return Object(m.jsx)(S.a, {
          children: Object(m.jsx)('div', {
            className: 'd-flex justify-content-center',
            children: Object(m.jsx)('img', {
              className: R.a.logo,
              src: N,
              alt: 'Logo',
            }),
          }),
        })
      }
      var q = n(280),
        M = n.n(q)
      function $() {
        return Object(m.jsx)('h3', {
          className: (M.a.subTitle = ' d-flex justify-content-center'),
          children: 'PassiveSwap is Now Live',
        })
      }
      var A = n(173),
        F = n.n(A)
      function B() {
        return Object(m.jsx)('div', {
          className: 'container box_button d-flex justify-content-center',
          children: Object(m.jsx)('button', {
            className: F.a.button + ' d-flex justify-content-center',
            children: Object(m.jsx)('span', {
              className: F.a.textButton,
              children: 'Start Swapping ',
            }),
          }),
        })
      }
      var O = n(76),
        U = n.n(O),
        j = n.p + 'static/media/bsc.f2b86ec9.png'
      function H() {
        return Object(m.jsx)(m.Fragment, {
          children: Object(m.jsxs)('div', {
            className: U.a.dexs + ' container',
            children: [
              Object(m.jsxs)(S.a, {
                children: [
                  Object(m.jsx)(v.a, {
                    md: 4,
                    children: Object(m.jsx)('div', {
                      className: 'd-flex justify-content-center',
                      children: Object(m.jsx)('img', {
                        className: U.a.coingecko,
                        src:
                          'data:image/png;base64,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',
                        alt: '',
                      }),
                    }),
                  }),
                  Object(m.jsx)(v.a, {
                    md: 4,
                    children: Object(m.jsx)('div', {
                      className: 'd-flex justify-content-center',
                      children: Object(m.jsx)('img', {
                        className: U.a.cmc,
                        src:
                          'data:image/png;base64,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',
                        alt: '',
                      }),
                    }),
                  }),
                  Object(m.jsx)(v.a, {
                    md: 4,
                    children: Object(m.jsx)('div', {
                      className: 'd-flex justify-content-center',
                      children: Object(m.jsx)('img', {
                        className: U.a.pancakeswap,
                        src:
                          'data:image/png;base64,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',
                        alt: '',
                      }),
                    }),
                  }),
                ],
              }),
              Object(m.jsxs)(S.a, {
                children: [
                  Object(m.jsx)(v.a, {
                    md: 6,
                    children: Object(m.jsx)('div', {
                      className: 'gr02 d-flex justify-content-end',
                      children: Object(m.jsx)('img', {
                        className: U.a.dextools,
                        src:
                          'data:image/png;base64,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',
                        alt: '',
                      }),
                    }),
                  }),
                  Object(m.jsx)(v.a, {
                    md: 6,
                    children: Object(m.jsx)('div', {
                      className: 'gr02 d-flex justify-content-start',
                      children: Object(m.jsx)('img', {
                        className: U.a.bsc,
                        src: j,
                        alt: '',
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        })
      }
      function W() {
        return Object(m.jsx)(m.Fragment, {
          children: Object(m.jsx)('div', {
            className: 'index container',
            children: Object(m.jsxs)('div', {
              className: 'Content',
              children: [
                Object(m.jsx)(w, {}),
                Object(m.jsx)($, {}),
                Object(m.jsx)(B, {}),
                Object(m.jsx)(H, {}),
              ],
            }),
          }),
        })
      }
      var z = n(110),
        Q = n.n(z),
        K = n(281),
        J = n.n(K)
      function X() {
        return Object(m.jsx)(V.a, {
          children: Object(m.jsx)(S.a, {
            children: Object(m.jsx)('h2', {
              className: J.a.title,
              children: 'Realistic Vision, Exciting Features',
            }),
          }),
        })
      }
      var G = n(282),
        Y = n.n(G)
      function Z() {
        return Object(m.jsx)('h3', {
          className: Y.a.subtitle + ' d-flex justify-content-center',
          children:
            'The Ethereum network already facilitates countless projects with real world applications, further fostering innovation and adoption. Because of this, we believe that Ether is significantly undervalued, So PassiveSwap holders are rewarded with Ether reflections.',
        })
      }
      var ee = n(283),
        te = n.n(ee)
      function ne() {
        return Object(m.jsx)('h4', {
          className: te.a.SecondSubTitle + ' d-flex justify-content-center',
          children:
            'It is our goal to offer interest earning DeFi options to PrimBank holders by leveraging established lending platforms \u2013 to earn interest on the Ether reflected into the Vault.',
        })
      }
      var ae = n(648),
        ie = n(649),
        re = n(46),
        se = n.n(re)
      function le() {
        return Object(m.jsx)(ae.a, {
          sx: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 355,
              height: 400,
              backgroundColor: '#DCB315',
            },
          },
          children: Object(m.jsxs)(ie.a, {
            elevation: 6,
            children: [
              Object(m.jsx)(S.a, {
                children: Object(m.jsx)(v.a, {
                  md: 12,
                  className: 'd-flex justify-content-center',
                  style: { padding: '40px' },
                  children: Object(m.jsx)('h2', {
                    className: se.a.titleCard,
                    children:
                      '10% Eth Reflections deposited into the PrimBank Vault',
                  }),
                }),
              }),
              Object(m.jsx)(S.a, {
                children: Object(m.jsx)(v.a, {
                  md: 12,
                  style: { padding: '40px' },
                  children: Object(m.jsx)('p', {
                    className:
                      se.a.subTitleCard + ' d-flex justify-content-center',
                    children:
                      '10% of every buy/sell is deposited into the PrimBank Vault ready to be redistributed and claimed by PrimBank holders who earn & claim Eth.',
                  }),
                }),
              }),
            ],
          }),
        })
      }
      function de() {
        return Object(m.jsx)(ae.a, {
          sx: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 355,
              height: 400,
              backgroundColor: '#DCB315',
            },
          },
          children: Object(m.jsxs)(ie.a, {
            elevation: 6,
            children: [
              Object(m.jsx)(S.a, {
                children: Object(m.jsx)(v.a, {
                  md: 12,
                  className: 'd-flex justify-content-center',
                  style: { padding: '40px' },
                  children: Object(m.jsx)('h2', {
                    className: se.a.titleCard,
                    children:
                      'Unique Anti-Dump \u2018Time locked wallet mechanism\u2019',
                  }),
                }),
              }),
              Object(m.jsx)(S.a, {
                children: Object(m.jsx)(v.a, {
                  md: 12,
                  style: { padding: '40px' },
                  children: Object(m.jsx)('p', {
                    className:
                      se.a.subTitleCard + ' d-flex justify-content-center',
                    children:
                      'All sales are limited to an aggregate summation of \u2264 0.2% of the total supply per wallet, every 24 hours. This is designed to hopefully mitigate volatility, limit large volume swing trading and whale manipulation.',
                  }),
                }),
              }),
            ],
          }),
        })
      }
      function ue() {
        return Object(m.jsx)(ae.a, {
          sx: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 355,
              height: 400,
              backgroundColor: '#DCB315',
            },
          },
          children: Object(m.jsxs)(ie.a, {
            elevation: 6,
            children: [
              Object(m.jsx)(S.a, {
                children: Object(m.jsx)(v.a, {
                  md: 12,
                  className: 'd-flex justify-content-center',
                  style: { padding: '40px' },
                  children: Object(m.jsx)('h2', {
                    className: se.a.titleCard,
                    children: 'Claim & or Re-invest',
                  }),
                }),
              }),
              Object(m.jsx)(S.a, {
                children: Object(m.jsx)(v.a, {
                  md: 12,
                  style: { padding: '40px' },
                  children: Object(m.jsx)('p', {
                    className:
                      se.a.subTitleCard + ' d-flex justify-content-center',
                    children:
                      'PrimBank holders have the opportunity to either claim their Eth or claim and re-invest into PrimBank at a 10% discount.',
                  }),
                }),
              }),
            ],
          }),
        })
      }
      function oe() {
        return Object(m.jsx)(V.a, {
          children: Object(m.jsxs)('div', {
            className: se.a.content + ' row',
            children: [
              Object(m.jsx)(v.a, { md: 4, children: Object(m.jsx)(le, {}) }),
              Object(m.jsx)(v.a, { md: 4, children: Object(m.jsx)(de, {}) }),
              Object(m.jsx)(v.a, { md: 4, children: Object(m.jsx)(ue, {}) }),
            ],
          }),
        })
      }
      var pe = n(285),
        ce = n.n(pe)
      function ye() {
        return Object(m.jsx)(V.a, {
          children: Object(m.jsx)(S.a, {
            children: Object(m.jsxs)(v.a, {
              md: 12,
              children: [
                Object(m.jsx)('p', {
                  className: ce.a.comemnt,
                  children:
                    'A transaction contribution of 1% is added towards furthering the development & maintanence of the project long into the future.',
                }),
                ')',
              ],
            }),
          }),
        })
      }
      function me() {
        return Object(m.jsx)(m.Fragment, {
          children: Object(m.jsx)(V.a, {
            children: Object(m.jsxs)('div', {
              className: 'content',
              children: [
                Object(m.jsx)(X, {}),
                Object(m.jsx)(Z, {}),
                Object(m.jsx)(ne, {}),
                Object(m.jsx)(oe, {}),
                Object(m.jsx)(ye, {}),
              ],
            }),
          }),
        })
      }
      var fe,
        be,
        ge,
        Te,
        _e,
        ve = n.p + 'static/media/1032.6222f81b.png',
        De = n.p + 'static/media/text2.51f1fe89.svg',
        Ie = n(286),
        Ve = n.n(Ie),
        Se = o.a.div(
          fe ||
            (fe = Object(u.a)([
              '\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n\n  img {\n    width: 16%;\n    height: auto;\n  }\n',
            ])),
        ),
        he = o.a.div(
          be ||
            (be = Object(u.a)([
              '\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  top: 50px;\n\n  img {\n    width: 24%;\n    height: auto;\n  }\n',
            ])),
        ),
        Ce = o.a.div(
          ge ||
            (ge = Object(u.a)([
              '\n  position: relative;\n  top: 100px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n\n  h1 {\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 60px;\n    line-height: 90px;\n    /* identical to box height */\n    color: #ffffff;\n  }\n',
            ])),
        ),
        Le = o.a.div(
          Te ||
            (Te = Object(u.a)([
              '\n  position: relative;\n  top: 150px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n\n  img {\n    width: 24%;\n    height: auto;\n  }\n',
            ])),
        ),
        xe = o.a.div(
          _e ||
            (_e = Object(u.a)([
              "\n  position: relative;\n  top: 200px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  h2 {\n    font-family: 'Poppins', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 32px;\n    line-height: 48px;\n    /* identical to box height */\n\n    text-align: center;\n\n    color: #ffffff;\n  }\n",
            ])),
        )
      function Pe() {
        return Object(m.jsx)(V.a, {
          children: Object(m.jsx)('div', {
            className: Ve.a.content,
            children: Object(m.jsxs)(S.a, {
              children: [
                Object(m.jsx)(v.a, {
                  md: 12,
                  children: Object(m.jsx)(Se, {
                    children: Object(m.jsx)('img', {
                      src:
                        'data:image/png;base64,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',
                      alt: 'tether',
                    }),
                  }),
                }),
                Object(m.jsx)(v.a, {
                  md: 12,
                  children: Object(m.jsx)(he, {
                    children: Object(m.jsx)('img', { src: ve, alt: 'n_1032' }),
                  }),
                }),
                Object(m.jsx)(v.a, {
                  md: 12,
                  children: Object(m.jsx)(Ce, {
                    children: Object(m.jsx)('h2', { children: 'USDT Rewards' }),
                  }),
                }),
                Object(m.jsx)(v.a, {
                  md: 12,
                  children: Object(m.jsx)(Le, {
                    children: Object(m.jsx)('img', { src: De, alt: 'text' }),
                  }),
                }),
                Object(m.jsx)(v.a, {
                  md: 12,
                  children: Object(m.jsx)(xe, {
                    children: Object(m.jsx)('h2', {
                      children: '$4,652,715.755',
                    }),
                  }),
                }),
              ],
            }),
          }),
        })
      }
      var Ee,
        ke = n.p + 'static/media/Title.e618f4e8.png',
        Re = o.a.div(
          Ee ||
            (Ee = Object(u.a)([
              '\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n\n  img {\n    width: 50%;\n    height: auto;\n    margin-top: 90px;\n  }\n',
            ])),
        )
      function Ne() {
        return Object(m.jsx)(Re, {
          children: Object(m.jsx)('img', { src: ke, alt: 'title' }),
        })
      }
      var we,
        qe,
        Me,
        $e =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOvSURBVHgB1VlNTxRBEK3uhY2C8hGIECMxcJCTxoMXDnrhv3j0qvHEyfgb/CN64aAmcvBi5OJyYEnYRCRuUCLrByvjezs9ONvUzM4uM7PhJbPd6a7pflPVVd1da2RAPJRg9LrIpBWZGxUZOxGZQH30Lx72V0SOUW+h2g5Emqg318R8lQFhpE+sSTDryC1EpLKC5PFBeyjrT8R87+fdzERJcETkFqozkg+abZEP0HIri3BPojTxTZFlmG9RCgA+fvuXSA2E22lyqUShxTHYdgUkx6RAgETrWGQjTbuJRJ9LMAmCK2nrkM4DmQU81zDQFJquGCePNswtP1B+Q9s+nt2TsC2R7FWR94/EHCb0908SL42jfxnlkunDoUC0DvlNvHuk9dPZxkXeaWTPEE0ztws/dyqhUw0MjLGFMT5qGibZ3yJv/GXQRdQ5zgONJLWIYtWV54bT6rqmXbdmX8cdzMYFnHdrJKfzJOnGjD582u8jh0vgEm87JUqTayHIDXg/T5JZxoYqlxi7xSeKeHbXF7aho6wWQVK6ya5axSlHYr7QIfoYXi7KjkPHKZJkBM7BuZSumUirHaITCSY/r3f3A86lKYXnCld2fuZ9AazX21IyjOdABA8/0OqIfSbBjBLYq7agvb0HFv216rhNWVRmfWl82Q0ZDqrckv1Gmt8axYm4d8uQYJS5eTC32n6uBeGyEChzd24PVZHLinzhISkJJuGMkaTRvq4YOaPqN5CjlQsCW1GOWkHKAbcE/PEbyNEmnLrVg20ZCMIrdhd47OMa1U7TBzIkaHPjJNWm6X/6HfiqfRkevvgNTGAw4H9WOhpDXKcNv4FZFrsD0ysOxQVdl/JR932G3JgKsi/EMM3SUF76JCUDVtz025gCYtmJownmP8KzJeWhpl30Ks6yHaJPxTRRNH2hIOUOnifcHJtKVzNKpp3uTKjUFEGu1fUiyUbXZi2eM4km//mFoFaZsEoY6G0RZNPGBvHteBKia68Hyy2j7AxBGIRz1WwsAXEmwJNDw/OPLqKMAMyqJez/dK5XOTlYDWRepmRJNsjFaz+LLEkyE17+Mt+ruIHgne0gwbuJSiizoWWjU9OOIHovLTfqLmK8X825k/m4l3akFQ6ypB3TSKYSJS5EIjcCM3xLSA4wFyQFgN5Nx/HXpI+eRCNQuy4/ldufDYzdbrPpicxEI7i1y0TB/CB/30Btu/jgvawEI/RNNA6XZZllboCkeaON/yFG58EHHYJci+R2UO9l4iT8A+gPSunFatPFAAAAAElFTkSuQmCC',
        Ae =
          'data:image/png;base64,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',
        Fe = o.a.div(
          we ||
            (we = Object(u.a)([
              '\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 50px;\n\n  h3 {\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 20px;\n    /* identical to box height */\n    color: #ffffff;\n  }\n',
            ])),
        ),
        Be = o.a.div(
          qe ||
            (qe = Object(u.a)([
              '\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 80px;\n',
            ])),
        ),
        Oe = o.a.span(
          Me ||
            (Me = Object(u.a)([
              '\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 10px;\n  padding-top: 15px;\n\n  p {\n    margin-top: 10px;\n    margin-left: 4px;\n  }\n\n  img {\n    width: 10%;\n    height: 100%auto;\n  }\n',
            ])),
        )
      function Ue() {
        return Object(m.jsx)(Be, {
          children: Object(m.jsxs)(S.a, {
            children: [
              Object(m.jsxs)(v.a, {
                md: 4,
                children: [
                  Object(m.jsx)(Fe, {
                    children: Object(m.jsx)('h3', {
                      children: 'Quarter 3 2021',
                    }),
                  }),
                  Object(m.jsxs)(Oe, {
                    children: [
                      Object(m.jsx)('img', { src: Ae, alt: '' }),
                      Object(m.jsx)('p', { children: ' Liquidity locked' }),
                    ],
                  }),
                  Object(m.jsxs)(Oe, {
                    children: [
                      Object(m.jsx)('img', { src: Ae, alt: '' }),
                      Object(m.jsx)('p', { children: ' Liquidity locked' }),
                    ],
                  }),
                  Object(m.jsxs)(Oe, {
                    children: [
                      Object(m.jsx)('img', { src: Ae, alt: '' }),
                      Object(m.jsx)('p', { children: ' Liquidity locked' }),
                    ],
                  }),
                  Object(m.jsxs)(Oe, {
                    children: [
                      Object(m.jsx)('img', { src: $e, alt: '' }),
                      Object(m.jsx)('p', { children: ' Liquidity locked' }),
                    ],
                  }),
                  Object(m.jsxs)(Oe, {
                    children: [
                      Object(m.jsx)('img', { src: $e, alt: '' }),
                      Object(m.jsx)('p', { children: ' Liquidity locked' }),
                    ],
                  }),
                ],
              }),
              Object(m.jsxs)(v.a, {
                md: 4,
                children: [
                  Object(m.jsx)(Fe, {
                    children: Object(m.jsx)('h3', {
                      children: 'Quarter 3 2021',
                    }),
                  }),
                  Object(m.jsxs)(Oe, {
                    children: [
                      Object(m.jsx)('img', { src: Ae, alt: '' }),
                      Object(m.jsx)('p', { children: ' Liquidity locked' }),
                    ],
                  }),
                  Object(m.jsxs)(Oe, {
                    children: [
                      Object(m.jsx)('img', { src: Ae, alt: '' }),
                      Object(m.jsx)('p', { children: ' Liquidity locked' }),
                    ],
                  }),
                  Object(m.jsxs)(Oe, {
                    children: [
                      Object(m.jsx)('img', { src: Ae, alt: '' }),
                      Object(m.jsx)('p', { children: ' Liquidity locked' }),
                    ],
                  }),
                  Object(m.jsxs)(Oe, {
                    children: [
                      Object(m.jsx)('img', { src: $e, alt: '' }),
                      Object(m.jsx)('p', { children: ' Liquidity locked' }),
                    ],
                  }),
                  Object(m.jsxs)(Oe, {
                    children: [
                      Object(m.jsx)('img', { src: $e, alt: '' }),
                      Object(m.jsx)('p', { children: ' Liquidity locked' }),
                    ],
                  }),
                ],
              }),
              Object(m.jsxs)(v.a, {
                md: 4,
                children: [
                  Object(m.jsx)(Fe, {
                    children: Object(m.jsx)('h3', {
                      children: 'Quarter 3 2021',
                    }),
                  }),
                  Object(m.jsxs)(Oe, {
                    children: [
                      Object(m.jsx)('img', { src: Ae, alt: '' }),
                      Object(m.jsx)('p', { children: ' Liquidity locked' }),
                    ],
                  }),
                  Object(m.jsxs)(Oe, {
                    children: [
                      Object(m.jsx)('img', { src: Ae, alt: '' }),
                      Object(m.jsx)('p', { children: ' Liquidity locked' }),
                    ],
                  }),
                  Object(m.jsxs)(Oe, {
                    children: [
                      Object(m.jsx)('img', { src: Ae, alt: '' }),
                      Object(m.jsx)('p', { children: ' Liquidity locked' }),
                    ],
                  }),
                  Object(m.jsxs)(Oe, {
                    children: [
                      Object(m.jsx)('img', { src: $e, alt: '' }),
                      Object(m.jsx)('p', { children: ' Liquidity locked' }),
                    ],
                  }),
                  Object(m.jsxs)(Oe, {
                    children: [
                      Object(m.jsx)('img', { src: $e, alt: '' }),
                      Object(m.jsx)('p', { children: ' Liquidity locked' }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      }
      function je() {
        return Object(m.jsxs)('div', {
          className: 'container',
          children: [
            Object(m.jsx)(S.a, {
              children: Object(m.jsx)(v.a, {
                md: 12,
                children: Object(m.jsx)(Ne, {}),
              }),
            }),
            Object(m.jsx)(Ue, {}),
          ],
        })
      }
      var He,
        We = n.p + 'static/media/image 1.4c54186f.png',
        ze = o.a.div(
          He ||
            (He = Object(u.a)([
              '\n  img {\n    position: relative;\n    width: 90%;\n    height: 100% auto;\n  }\n',
            ])),
        )
      function Qe() {
        return Object(m.jsx)(m.Fragment, {
          children: Object(m.jsx)(ze, {
            children: Object(m.jsx)('img', { src: We, alt: 'RewardsInfo' }),
          }),
        })
      }
      var Ke,
        Je,
        Xe,
        Ge = o.a.div(
          Ke ||
            (Ke = Object(u.a)([
              '\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n\n  h2 {\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 48px;\n    line-height: 59px;\n\n    color: #ffffff;\n\n    span {\n      img {\n        width: 58%;\n        margin-bottom: 50px;\n      }\n    }\n  }\n',
            ])),
        ),
        Ye = o.a.div(
          Je ||
            (Je = Object(u.a)([
              '\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  margin-top: -30px;\n\n  p {\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    line-height: 24px;\n    color: #ffffff;\n  }\n',
            ])),
        ),
        Ze = o.a.button(
          Xe ||
            (Xe = Object(u.a)([
              '\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  width: 180px;\n  height: 42px;\n  background: #DCB315;\n  border-radius: 4px;\n\n  span {\n    position: relative;\n    margin-left: 22px;\n    margin-top: 7px;\n    font-family: Poppins;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 22px;\n    /* identical to box height */\n    text-align: center;\n    color: #ffffff;\n  }\n',
            ])),
        )
      function et() {
        return Object(m.jsxs)(m.Fragment, {
          children: [
            Object(m.jsx)(Ge, {
              children: Object(m.jsxs)('h2', {
                children: [
                  'Easy to use Dashboard. to view and claim ',
                  Object(m.jsx)('br', {}),
                  ' ',
                  Object(m.jsxs)('span', {
                    children: [
                      'USDT earnings. ',
                      Object(m.jsx)('img', {
                        src:
                          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV0AAAAECAYAAAAtfuw8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMwSURBVHgBzVdbktswDCNy8d580Y1DSgApZ9uPZuqZ2JYlkuADlIJfQQIRwe8fvu+M5+i6kDcw9lVjvObJcIHnuPTlp+fY1jX910NsQHGknfB5Gz9S/5Ct8cuzpavrExiFid/68Hjjl+Fo/j7lIRg0Zrauz3e9Yv76JOssZ00Fmuwhh1eMMHHv2LScIabOFdMe+/SfhTN1qi62vA/9OtBa0ji0vOiT+Sx/qLKCx+y2uI/vrRZtPaYvlDV3Mav3g08ru+9q5Q535UL5Jyqcv2rzQ/xHe/lT/lsc83qofpFd4/g8/1sPsryXXuZ9OwpTYhfz1usT9IIuBdTnQU/I2oUDfaEMudc+H18+v3xYb4qHcWxoDZjHl9vu4sorMQfDYXEseQ4jW8/Rv5CmgZZbCCxe/mHJdHKV/RAMhY+u6/KvxbYHx+LY1jAbbT2LlGpn+cJNXq2RYSybgRGWGwPa08y9xiRmA1nNQE0xzv6KPU0VGyZqLCN8EzCF4c0GzSep26sBhMRnt5AJBIZZ9zvzuTeJgscP89/Ald3Efsf/1TMEX9tQ9kbzH/FfjTzymzUqMxiHgglxXqa6DMIJoDoQLRAixP4tBawJSTEvQoU0F4YFuIhugCOOG8E6hSE4M5LrdIatOLsPRSr+oGcvHzHQ01v5BTQhfZdiT19W84esGbJpjz3+W/dMzyG3qZ9ozWWZgOepyKOpk9yNUhE89q49JXOOO7nVZDEJdmdvhE3qCK0ZLB2aK8Y4qVIaKTCamtVZrkf5aitaHu58CjpfF7wP8l/ldMMhXDdu+H+3mX1F6qBz7tP879g17w9dO6xb9W5BxJGnt8mi8P9kq8v1cciuQi1qRv0NWwBAL0ZACl4BnAgXA6P+ORnYcVOEiMPBFvOd3qQIMY6aL4yHAHdQKKyHJCgBbVNy3Gt4V3BXePH6S7dsin3tjpQTeBHhUFes+XHy1A4q363hhOu/1EqNCoG6vzTitZyM64XvqkNiRvh4rJQa03hX/KvBJLZXSWuTyJdVvq32R0NrmE5Tyg3NO6PFdOYpdIP8G/7HG/6f8I1UaU0f+A8BoPXIf8z/+IH/GlNIrf0GbqcVGrVJ9ScAAAAASUVORK5CYII=',
                        alt: '',
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(m.jsx)(Ye, {
              children: Object(m.jsx)('p', {
                children:
                  'Connect your wallet and seamlessly claim your rewards.',
              }),
            }),
            Object(m.jsx)(Ze, {
              children: Object(m.jsx)('span', { children: 'VIEW DASHBOARD' }),
            }),
          ],
        })
      }
      var tt = n(287),
        nt = n.n(tt)
      function at() {
        return Object(m.jsx)('div', {
          className: nt.a.content + ' container',
          children: Object(m.jsxs)(S.a, {
            children: [
              Object(m.jsx)(v.a, {
                xs: 12,
                md: 6,
                children: Object(m.jsx)(Qe, {}),
              }),
              Object(m.jsx)(v.a, {
                xs: 12,
                md: 6,
                children: Object(m.jsx)(et, {}),
              }),
            ],
          }),
        })
      }
      var it = n(107),
        rt = n.n(it),
        st =
          'data:image/png;base64,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252z6fzhBLCwviNPU/FRp6PbjO3bq4t1Ko7+8fFloNRzd8VSG2Ecbau0Rdz//lH/VPdy+aA2EaeC51+fXT52TTKq5//5/Wn6w+8uj6mev/xdbadtv/btqm399cPLQB4d9+g9HS2BtFT7Vvswmsm+T0jWttqxtfVRR5cztFP4v//1OCTrM6rjWm6j3od6bwHWbp1PD/89ASyM1s2skbzlCNdyDcs2mebQU6zH3NZou23bh078afeTX6rtfNWXDlovcXXI+9+i+Jj3rAdePCYXAQc75v26T3Xv72Nu90WIzJ424es6TrEGK/DicY0nAAARwhMAgAjhCQBAhPAEACBCeAIAEGFWO/CcfdeGBIAtjHgCABAhPAEAiBCeAABECE8AACKEJwAAEcITAIAI4QkAQITwBAAgQngCABAhPAEAiBCeAABECE8AACKEJwAAEcITAIAI4QkAQITwBAAgQngCABAhPAEAiBCeAABECE8AACKEJwAAEcITAIAI4QkAQITwBAAgQngCABAhPAEAiBCeAABECE8AACKEJwAAEcITAIAI4QkAQITwBAAgQngCABAhPAEAiBCeAABECE8AACKEJwAAEcITAIAI4QkAQITwBAAgQngCABAhPAEAiBCeAABECE8AACKEJwAAEcITAIAI4QkAQITwBAAgQngCABAhPAEAiBCeAABECE8AACKEJwAAEcITAIAI4QkAQITwBAAgQngCABAhPAEAiBCeAABECE8AACKEJwAAEcITAIAI4QkAQITwBAAgQngCABAhPAEAiBCeAABECE8AACKEJwAAEcITAIAI4QkAQITwBAAgQngCABAhPAEAiBCeAABECE8AACKEJwAAEcITAIAI4QkAQITwBAAgQngCABAhPAEAiBCeAABECE8AACKEJwAAEcITAIAI4QkAQITwBAAgQngCABAhPAEAiBCeAABECE8AACKEJwAAEcITAIAI4QkAQITwBAAgQngCABAhPAEAiBCeAABECE8AACKEJwAAEcITAIAI4QkAQITwBAAgQngCABAhPAEAiBCeAABECE8AACKEJwAAEcITAIAI4QkAQITwBAAgQngCABAhPAEAiBCeAABECE8AACIqPC8mAAA4rYsKzw8mAAA4rQ8qPB9PAABwWm9XeD6aH88mAAA4jYvH08NHt+f/VHT+ZAIAgNN4o/5zp/5zMT1+ejadf2P+9rUJAACO5415oPPN+uZO+8kcn+/M8Xlr/vZ8AgCA6/vFHJ2vtz/cWf5mjs/Hc3z+af723vy4OwEAwP7qUs4ft5HO5tbo2efTwwfzlx9OlxF6NgEAwNjF/HgyP96dH4++mEf0Jf8B8EjY/BU0wqIAAAAASUVORK5CYII='
      function lt() {
        return Object(m.jsx)(m.Fragment, {
          children: Object(m.jsx)(S.a, {
            children: Object(m.jsxs)(v.a, {
              xs: 12,
              md: 12,
              children: [
                ' ',
                Object(m.jsx)('div', {
                  className:
                    rt.a.videoPlayer + ' d-flex justify-content-center',
                  children: Object(m.jsxs)('video', {
                    className: '',
                    poster: st,
                    width: '670',
                    height: '292',
                    controls: !0,
                    children: [
                      Object(m.jsx)('source', {
                        src: 'movie.mp4',
                        type: 'video/mp4',
                      }),
                      Object(m.jsx)('source', {
                        src: 'movie.ogg',
                        type: 'video/ogg',
                      }),
                      'Your browser does not support the video tag.',
                    ],
                  }),
                }),
                Object(m.jsx)('div', {
                  className:
                    rt.a.videoPlayer + ' d-flex justify-content-center',
                  children: Object(m.jsxs)('video', {
                    className: '',
                    poster: st,
                    width: '670',
                    height: '292',
                    controls: !0,
                    children: [
                      Object(m.jsx)('source', {
                        src: 'movie.mp4',
                        type: 'video/mp4',
                      }),
                      Object(m.jsx)('source', {
                        src: 'movie.ogg',
                        type: 'video/ogg',
                      }),
                      'Your browser does not support the video tag.',
                    ],
                  }),
                }),
              ],
            }),
          }),
        })
      }
      var dt,
        ut,
        ot,
        pt = n.p + 'static/media/metamask.4368e45a.svg',
        ct = n.p + 'static/media/ethereum.393a7cb6.png',
        yt = n.p + 'static/media/cake.2bd17cd0.png',
        mt = o.a.div(
          dt ||
            (dt = Object(u.a)([
              '\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 35px;\n\n  img {\n    width: 70%;\n    height: 100% auto;\n  }\n\n  @media (max-width: 768px) {\n    img {\n      width: 15%;\n    }\n  }\n',
            ])),
        ),
        ft = o.a.div(
          ut ||
            (ut = Object(u.a)([
              '\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  left: 15px;\n  margin-top: 25px;\n',
            ])),
        ),
        bt = o.a.div(
          ot ||
            (ot = Object(u.a)([
              '\n  position: relative;\n\n  p {\n    margin-right: 10px;\n    margin-top: 25px;\n    font-family: Montserrat;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 24px;\n    color: #ffffff;\n\n    a {\n      text-decoration: none;\n      color: #c38bff;\n    }\n  }\n',
            ])),
        )
      function gt() {
        return Object(m.jsx)(ft, {
          children: Object(m.jsx)(ae.a, {
            sx: {
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 670,
                height: 240,
                backgroundColor: '#DCB315',
                borderRadius: '10px',
              },
            },
            children: Object(m.jsx)(ie.a, {
              elevation: 6,
              children: Object(m.jsxs)(S.a, {
                children: [
                  Object(m.jsx)(v.a, {
                    xs: 12,
                    md: 4,
                    children: Object(m.jsx)(mt, {
                      children: Object(m.jsx)('img', {
                        src: pt,
                        alt: 'Metamask',
                      }),
                    }),
                  }),
                  Object(m.jsx)(v.a, {
                    xs: 12,
                    md: 8,
                    children: Object(m.jsxs)(bt, {
                      children: [
                        Object(m.jsx)('p', {
                          children: 'Download & setup MetaMask or TrustWallet',
                        }),
                        Object(m.jsxs)('p', {
                          children: [
                            'Download ',
                            Object(m.jsx)('a', {
                              href: 'https://metamask.io/',
                              children: 'MetaMask',
                            }),
                            ' (a crypto wallet in form of a browser extension) or TrustWallet (an app for your phone). Make sure you are connected to Ethereum MainNet.',
                            ' ',
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        })
      }
      function Tt() {
        return Object(m.jsx)(ft, {
          children: Object(m.jsx)(ae.a, {
            sx: {
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 670,
                height: 240,
                backgroundColor: '#DCB315',
                borderRadius: '10px',
              },
            },
            children: Object(m.jsx)(ie.a, {
              elevation: 6,
              children: Object(m.jsxs)(S.a, {
                children: [
                  Object(m.jsx)(v.a, {
                    xs: 12,
                    md: 4,
                    children: Object(m.jsx)(mt, {
                      children: Object(m.jsx)('img', {
                        src: ct,
                        alt: 'Eth',
                        style: { width: '40%' },
                      }),
                    }),
                  }),
                  Object(m.jsx)(v.a, {
                    xs: 12,
                    md: 8,
                    children: Object(m.jsxs)(bt, {
                      children: [
                        Object(m.jsx)('p', {
                          children: 'Buy and send Ether to MetaMask',
                        }),
                        Object(m.jsxs)('p', {
                          children: [
                            'Buy Ether on an exchange (i.e. Binance, Kraken, Coinbase etc.). Transfer the Ether to your MetaMask wallet address. Ethereum addresses start with a "0x".',
                            ' ',
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        })
      }
      function _t() {
        return Object(m.jsx)(ft, {
          children: Object(m.jsx)(ae.a, {
            sx: {
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 670,
                height: 240,
                backgroundColor: '#DCB315',
                borderRadius: '10px',
              },
            },
            children: Object(m.jsx)(ie.a, {
              elevation: 6,
              children: Object(m.jsxs)(S.a, {
                children: [
                  Object(m.jsx)(v.a, {
                    xs: 12,
                    md: 4,
                    children: Object(m.jsx)(mt, {
                      children: Object(m.jsx)('img', {
                        src: yt,
                        alt: 'Metamask',
                      }),
                    }),
                  }),
                  Object(m.jsx)(v.a, {
                    xs: 12,
                    md: 8,
                    children: Object(m.jsxs)(bt, {
                      children: [
                        Object(m.jsx)('p', {
                          children:
                            'Head on to PancakeSwap and swap for $PrimBank',
                        }),
                        Object(m.jsxs)('p', {
                          children: [
                            Object(m.jsx)('a', {
                              href: 'https://pancakeswap.finance/',
                              children: 'Click here ',
                            }),
                            ' to head on over to PancakeSwap or use this address to select PrimBank. Set the slippage tolerance to 12% (sometimes it may be a bit more, depending on how much demand there is).',
                            ' ',
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        })
      }
      function vt() {
        return Object(m.jsx)(ft, {
          children: Object(m.jsx)(ae.a, {
            sx: {
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 670,
                height: 240,
                backgroundColor: '#DCB315',
                borderRadius: '10px',
              },
            },
            children: Object(m.jsx)(ie.a, {
              elevation: 6,
              children: Object(m.jsxs)(S.a, {
                children: [
                  Object(m.jsx)(v.a, {
                    xs: 12,
                    md: 4,
                    children: Object(m.jsx)(mt, {
                      children: Object(m.jsx)('img', {
                        src:
                          'data:image/png;base64,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',
                        alt: 'Metamask',
                      }),
                    }),
                  }),
                  Object(m.jsx)(v.a, {
                    xs: 12,
                    md: 8,
                    children: Object(m.jsxs)(bt, {
                      children: [
                        Object(m.jsx)('p', {
                          children: 'View $PrimBank and HODL',
                        }),
                        Object(m.jsxs)('p', {
                          children: [
                            'Swap Ether for PrimBank. Now you need to add PrimBank to your MetaMask or Trust Wallet to view your $PrimBank. Lastly HODL!',
                            ' ',
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        })
      }
      function Dt() {
        return Object(m.jsx)(m.Fragment, {
          children: Object(m.jsxs)(S.a, {
            children: [
              Object(m.jsx)(v.a, {
                xs: 12,
                md: 12,
                children: Object(m.jsx)(gt, {}),
              }),
              Object(m.jsx)(v.a, {
                xs: 12,
                md: 12,
                children: Object(m.jsx)(Tt, {}),
              }),
              Object(m.jsx)(v.a, {
                xs: 12,
                md: 12,
                children: Object(m.jsx)(_t, {}),
              }),
              Object(m.jsx)(v.a, {
                xs: 12,
                md: 12,
                children: Object(m.jsx)(vt, {}),
              }),
            ],
          }),
        })
      }
      function It() {
        return Object(m.jsx)(m.Fragment, {
          children: Object(m.jsxs)('div', {
            className: rt.a.content + ' container',
            children: [Object(m.jsx)(lt, {}), Object(m.jsx)(Dt, {})],
          }),
        })
      }
      function Vt() {
        return Object(m.jsxs)(m.Fragment, {
          children: [
            Object(m.jsx)('div', {
              id: 'banner',
              className: Q.a.bg + ' container-fluid',
              children: Object(m.jsx)(E, {}),
            }),
            Object(m.jsx)('div', {
              id: 'features',
              className: Q.a.features + ' container-fluid',
              children: Object(m.jsx)(W, {}),
            }),
            Object(m.jsx)('div', {
              id: 'FeaturesA',
              className: 'container-fluid',
              children: Object(m.jsx)(me, {}),
            }),
            Object(m.jsx)('div', {
              id: 'FeaturesB',
              className: 'container-fluid',
              children: Object(m.jsx)(Pe, {}),
            }),
            Object(m.jsx)('div', {
              id: 'roadmap',
              className: Q.a.roadmap + ' container-fluid',
              children: Object(m.jsx)(je, {}),
            }),
            Object(m.jsx)('div', {
              id: 'rewards',
              className: 'container-fluid',
              children: Object(m.jsx)(at, {}),
            }),
            Object(m.jsx)('div', {
              id: 'how-to-buy',
              className: Q.a.howToBuy + ' container-fluid',
              children: Object(m.jsx)(It, {}),
            }),
          ],
        })
      }
      function St() {
        return Object(m.jsx)('h1', {
          children: Object(m.jsx)('span', { children: 'WhitePaper' }),
        })
      }
      var ht,
        Ct = n(25),
        Lt = n(10),
        xt = n(33),
        Pt = n.n(xt),
        Et = n(288),
        kt = o.a.img(
          ht ||
            (ht = Object(u.a)([
              '\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  height: 100% auto;\n',
            ])),
        )
      function Rt() {
        var e = Object(Et.a)(),
          t = e.register,
          n = e.handleSubmit,
          a = Object(r.useState)(''),
          i = Object(Lt.a)(a, 2),
          s = i[0],
          l = i[1]
        return Object(m.jsx)('div', {
          className: Pt.a.bg + ' container-fluid',
          children: Object(m.jsx)('footer', {
            className: 'container',
            children: Object(m.jsxs)(S.a, {
              children: [
                Object(m.jsx)(v.a, {
                  md: 2,
                  children: Object(m.jsx)(kt, { src: y, alt: 'PrimBank logo' }),
                }),
                Object(m.jsxs)(v.a, {
                  md: 2,
                  children: [
                    Object(m.jsx)('h5', {
                      className: Pt.a.title,
                      children: 'Contact',
                    }),
                    Object(m.jsx)('p', {
                      className: Pt.a.parag,
                      children: 'Ferneberga House',
                    }),
                    Object(m.jsx)('p', {
                      className: Pt.a.parag,
                      children: 'Alexandra Road',
                    }),
                    Object(m.jsx)('p', {
                      className: Pt.a.parag,
                      children: 'Farnborough ',
                    }),
                    Object(m.jsx)('p', {
                      className: Pt.a.parag,
                      children: 'GU14 6DQ',
                    }),
                  ],
                }),
                Object(m.jsxs)(v.a, {
                  md: 2,
                  children: [
                    Object(m.jsx)('h5', {
                      className: Pt.a.title,
                      children: 'Connect',
                    }),
                    Object(m.jsx)('p', {
                      className: Pt.a.parag,
                      children: 'hello@PrimBank ',
                    }),
                    Object(m.jsx)('p', {
                      className: Pt.a.parag,
                      children: '+44 (0)330 133 0770',
                    }),
                  ],
                }),
                Object(m.jsxs)(v.a, {
                  md: 3,
                  children: [
                    Object(m.jsx)('h5', {
                      className: Pt.a.title,
                      children: 'Small Print',
                    }),
                    Object(m.jsx)('p', {
                      className: Pt.a.parag,
                      children: 'Privacy Policy',
                    }),
                    Object(m.jsx)('p', {
                      className: Pt.a.parag,
                      children: 'Terms & Conditions',
                    }),
                    Object(m.jsx)('p', {
                      className: Pt.a.parag,
                      children: 'Hosting Terms & Conditions',
                    }),
                    Object(m.jsx)('p', {
                      className: Pt.a.parag,
                      children: 'Website Terms & Conditions',
                    }),
                    Object(m.jsx)('p', {
                      className: Pt.a.parag,
                      children: 'Manage Cookies',
                    }),
                  ],
                }),
                Object(m.jsx)(v.a, {
                  md: 3,
                  children: Object(m.jsxs)('form', {
                    onSubmit: n(function (e) {
                      return l(JSON.stringify(e))
                    }),
                    children: [
                      Object(m.jsx)('h5', {
                        className: Pt.a.formTitle,
                        children: 'Subscribe to our newsletter',
                      }),
                      Object(m.jsx)(
                        'input',
                        Object(Ct.a)(
                          { clasName: Pt.a.inputbutton },
                          t('you mail'),
                        ),
                      ),
                      Object(m.jsx)('p', { children: s }),
                      Object(m.jsx)('button', {
                        type: 'submit',
                        children: Object(m.jsx)('span', {
                          children: 'SUBSCRIBE',
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        })
      }
      n(178)
      function Nt() {
        return Object(m.jsx)(m.Fragment, {
          children: Object(m.jsx)('div', {
            className: 'App',
            children: Object(m.jsxs)(b.a, {
              children: [
                Object(m.jsx)(f, {}),
                Object(m.jsxs)(g.c, {
                  children: [
                    Object(m.jsx)(g.a, { path: '/', exact: !0, component: Vt }),
                    Object(m.jsx)(g.a, {
                      path: '/whitePaper',
                      exact: !0,
                      component: St,
                    }),
                  ],
                }),
                Object(m.jsx)(Rt, {}),
              ],
            }),
          }),
        })
      }
      var wt = n(53),
        qt = n(45),
        Mt = n(646),
        $t = n(175),
        At = n.n($t),
        Ft = ['children'],
        Bt = function (e) {
          var t = e.children,
            n = Object(qt.a)(e, Ft)
          return Object(m.jsx)(
            'div',
            Object(Ct.a)(
              Object(Ct.a)({ className: At.a.root }, n),
              {},
              {
                children: Object(m.jsx)('div', {
                  className: At.a.body,
                  children: t,
                }),
              },
            ),
          )
        },
        Ot = n(291),
        Ut = n(24),
        jt = n(108),
        Ht = n(109),
        Wt = n(130),
        zt = 'INJECTED',
        Qt = 'WALLET_CONNECT',
        Kt = 'BSC'
      Ot.a.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 80 })
      var Jt = {
          defaultConnector: zt,
          chainId: 97,
          bsc: !0,
          darkMode: !1,
          orange: {
            address: '0xc362Db5548Ea3eB729B0f5530eEd3415A338f7Be',
            symbol: 'SHEEP',
          },
          wrappedNative: { address: '', symbol: '' },
          usd: { address: '', symbol: '' },
          nativeUsdLp: { address: '', symbol: '' },
          rpcUrls: {
            56: 'https://bsc-dataseed.binance.org/',
            97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
          },
          walletConnectPoolingInterval: 12e3,
          supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
          unsupportedChainSetup: {
            97: {
              chainId: '0x61',
              chainName: 'Binance Smart Chain Testnet',
              nativeCurrency: { name: 'BNB', symbol: 'bnb', decimals: 18 },
              rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
              blockExplorerUrls: ['https://testnet.bscscan.com'],
            },
            56: {
              chainId: '0x38',
              chainName: 'Binance Smart Chain Mainnet',
              nativeCurrency: { name: 'BNB', symbol: 'bnb', decimals: 18 },
              rpcUrls: ['https://bsc-dataseed.binance.org/'],
              blockExplorerUrls: ['https://bscscan.com/'],
            },
          },
        },
        Xt = s.a.createContext({ config: Jt, setConfig: function () {} }),
        Gt = function (e) {
          var t = e.children,
            n = e.config,
            a = Object(r.useState)(
              Object(Ct.a)(
                Object(Ct.a)(Object(Ct.a)({}, Jt), n),
                {},
                { rpcUrls: Object(Ct.a)(Object(Ct.a)({}, Jt), n) },
              ),
            ),
            i = Object(Lt.a)(a, 2),
            s = i[0],
            l = i[1]
          return Object(m.jsx)(Xt.Provider, {
            value: { config: s, setConfig: l },
            children: t,
          })
        },
        Yt = function () {
          return Object(r.useContext)(Xt)
        },
        Zt = n(77),
        en = n.n(Zt),
        tn = n(292),
        nn = ['open', 'close'],
        an = function (e) {
          var t = e.open,
            n = e.close,
            a = Object(qt.a)(e, nn),
            i = Yt().config
          return Object(m.jsxs)(tn, {
            isOpen: t,
            onRequestClose: function () {
              n()
            },
            className: i.darkMode ? en.a.darkModal : en.a.modal,
            overlayClassName: en.a.overlay,
            parentSelector: function () {
              return document.body
            },
            children: [
              Object(m.jsx)(Mt.a, {
                color: 'black',
                className: i.darkMode ? en.a.darkCloseIcon : en.a.closeIcon,
                fontSize: 'small',
                onClick: n,
              }),
              i.darkMode
                ? Object(m.jsx)(Bt, {
                    style: { overflow: 'auto' },
                    children: a.children,
                  })
                : Object(m.jsx)('div', {
                    className: en.a.root,
                    children: a.children,
                  }),
            ],
          })
        },
        rn = n.p + 'static/media/metamask.ecf033e6.svg',
        sn = n.p + 'static/media/trustwallet.43931c4d.svg',
        ln = n.p + 'static/media/mathwallet.a4449a7e.svg',
        dn = n.p + 'static/media/tokenpocket.982eec29.svg',
        un = n.p + 'static/media/walletconnect.1edebea6.svg',
        on = n.p + 'static/media/binancewallet.6fd9cbfe.svg',
        pn = n.p + 'static/media/safepalwallet.b8a5e1d3.svg',
        cn = [
          { title: 'MetaMask', image: rn, connector: zt },
          { title: 'Binance Chain Wallet', image: on, connector: Kt },
          { title: 'Trust Wallet', image: sn, connector: zt },
          { title: 'Wallet Connect', image: un, connector: Qt },
          { title: 'Math Wallet', image: ln, connector: zt },
          { title: 'Token Pocket', image: dn, connector: zt },
          { title: 'SafePal Wallet', image: pn, connector: zt },
        ],
        yn = n(7),
        mn = n.n(yn),
        fn = n(17),
        bn = 'LOCAL_STORAGE_CONNECTOR',
        gn = n(26),
        Tn = n.n(gn),
        _n = (function () {
          var e = Object(fn.a)(
            mn.a.mark(function e(t) {
              var n
              return mn.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(n = window.ethereum)) {
                          e.next = 23
                          break
                        }
                        return (
                          (e.prev = 2),
                          (e.next = 5),
                          n.request({
                            method: 'wallet_switchEthereumChain',
                            params: [{ chainId: t.chainId }],
                          })
                        )
                      case 5:
                      case 14:
                        return e.abrupt('return', !0)
                      case 8:
                        if (
                          ((e.prev = 8),
                          (e.t0 = e.catch(2)),
                          4902 !== e.t0.code)
                        ) {
                          e.next = 21
                          break
                        }
                        return (
                          (e.prev = 11),
                          (e.next = 14),
                          n.request({
                            method: 'wallet_addEthereumChain',
                            params: [t],
                          })
                        )
                      case 17:
                        return (
                          (e.prev = 17),
                          (e.t1 = e.catch(11)),
                          console.error(
                            "Can't setup the network on metamask because window.ethereum is undefined",
                          ),
                          e.abrupt('return', !1)
                        )
                      case 21:
                        return (
                          console.error(
                            "Can't setup the network on metamask because window.ethereum is undefined",
                          ),
                          e.abrupt('return', !1)
                        )
                      case 23:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [
                  [2, 8],
                  [11, 17],
                ],
              )
            }),
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        vn = s.a.createContext({
          open: !1,
          error: void 0,
          setOpen: function () {},
          setError: function () {},
        }),
        Dn = function () {
          var e = Object(wt.c)(),
            t = e.activate,
            n = e.deactivate,
            a = Object(r.useContext)(vn)
          return {
            open: a.open,
            setOpen: a.setOpen,
            activate: t,
            deactivate: n,
            error: a.error,
            setError: a.setError,
          }
        },
        In = function () {
          var e = Dn(),
            t = e.setError,
            n = e.activate,
            a = Yt().config,
            i = (function () {
              var e = Yt().config,
                t = Object(r.useState)(void 0),
                n = Object(Lt.a)(t, 2),
                a = n[0],
                i = n[1]
              return (
                Object(r.useEffect)(
                  function () {
                    var t,
                      n = new jt.a({ supportedChainIds: e.supportedChainIds }),
                      a = new Wt.BscConnector({
                        supportedChainIds: e.supportedChainIds,
                      }),
                      r = new Ht.b({
                        rpc: e.rpcUrls,
                        bridge: 'https://bridge.walletconnect.org',
                        qrcode: !0,
                        pollingInterval: e.walletConnectPoolingInterval,
                      })
                    i(
                      ((t = {}),
                      Object(Ut.a)(t, zt, n),
                      Object(Ut.a)(t, Kt, a),
                      Object(Ut.a)(t, Qt, r),
                      t),
                    )
                  },
                  [e],
                ),
                a
              )
            })(),
            s = Object(r.useCallback)(
              function (e) {
                if (i) {
                  var r = i[e]
                  r
                    ? (window.localStorage.setItem(bn, e),
                      n(
                        r,
                        (function () {
                          var e = Object(fn.a)(
                            mn.a.mark(function e(i) {
                              var s
                              return mn.a.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (!(i instanceof wt.a)) {
                                        e.next = 14
                                        break
                                      }
                                      return (
                                        (s =
                                          a.unsupportedChainSetup[a.chainId]),
                                        (e.next = 4),
                                        _n(
                                          null !== s && void 0 !== s
                                            ? s
                                            : {
                                                chainId: '0x'.concat(
                                                  parseInt(a.chainId).toString(
                                                    16,
                                                  ),
                                                ),
                                              },
                                        )
                                      )
                                    case 4:
                                      if (!e.sent) {
                                        e.next = 11
                                        break
                                      }
                                      return (e.next = 8), n(r)
                                    case 8:
                                      t(void 0), (e.next = 12)
                                      break
                                    case 11:
                                      t(
                                        'Unable to connect to required network '.concat(
                                          a.chainId,
                                        ),
                                      )
                                    case 12:
                                      e.next = 16
                                      break
                                    case 14:
                                      window.localStorage.removeItem(bn),
                                        i instanceof jt.b ||
                                        i instanceof Wt.NoBscProviderError
                                          ? t(
                                              'Provider Error',
                                              'No provider was found',
                                            )
                                          : i instanceof jt.c ||
                                            i instanceof Ht.a
                                          ? (r instanceof Ht.b &&
                                              (r.walletConnectProvider = null),
                                            t(
                                              'Authorization Error',
                                              'Please authorize to access your account',
                                            ))
                                          : t(i.name, i.message)
                                    case 16:
                                    case 'end':
                                      return e.stop()
                                  }
                              }, e)
                            }),
                          )
                          return function (t) {
                            return e.apply(this, arguments)
                          }
                        })(),
                      ))
                    : t("Can't find connector", 'The connector config is wrong')
                }
              },
              [i],
            )
          return s
        },
        Vn = n(50),
        Sn = n.n(Vn),
        hn = function () {
          var e = Yt().config,
            t = In(),
            n = Dn().setOpen,
            a = Object(wt.c)().library
          return (
            Object(r.useEffect)(
              function () {
                a && n(!1)
              },
              [a, n],
            ),
            Object(m.jsxs)('div', {
              className: Sn.a.root,
              children: [
                Object(m.jsx)('p', {
                  className: e.darkMode ? Sn.a.darkHeading : Sn.a.heading,
                  children: 'Connect Wallet',
                }),
                Object(m.jsx)('div', { className: Sn.a.divider }),
                Object(m.jsx)('div', {
                  spacing: 1,
                  className: Sn.a.grid,
                  children: cn
                    .filter(function (t) {
                      return e.bsc || t.connector !== Kt
                    })
                    .map(function (n, a) {
                      return Object(m.jsx)(
                        'div',
                        {
                          style: { marginBottom: 7 },
                          children: Object(m.jsxs)('div', {
                            className: ''.concat(
                              e.darkMode ? Sn.a.darkWalletBtn : Sn.a.walletBtn,
                            ),
                            onClick: function () {
                              return t(n.connector)
                            },
                            children: [
                              Object(m.jsx)('p', {
                                className: e.darkMode
                                  ? Sn.a.darkTitle
                                  : Sn.a.title,
                                children: n.title,
                              }),
                              Object(m.jsx)('img', { alt: '', src: n.image }),
                            ],
                          }),
                        },
                        a,
                      )
                    }),
                }),
                Object(m.jsxs)('p', {
                  className: ''.concat(Sn.a.learnText),
                  children: [
                    Object(m.jsx)(Mt.a, {}),
                    '\xa0Learn how to connect',
                  ],
                }),
              ],
            })
          )
        },
        Cn = s.a.createContext({ slow: 0, fast: 0 }),
        Ln = function (e) {
          var t = e.children,
            n = Object(r.useState)(0),
            a = Object(Lt.a)(n, 2),
            i = a[0],
            s = a[1],
            l = Object(r.useState)(0),
            d = Object(Lt.a)(l, 2),
            u = d[0],
            o = d[1]
          return (
            Object(r.useEffect)(function () {
              var e = setInterval(
                Object(fn.a)(
                  mn.a.mark(function e() {
                    return mn.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            o(function (e) {
                              return e + 1
                            })
                          case 1:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                ),
                1e4,
              )
              return function () {
                return clearInterval(e)
              }
            }, []),
            Object(r.useEffect)(function () {
              var e = setInterval(
                Object(fn.a)(
                  mn.a.mark(function e() {
                    return mn.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            s(function (e) {
                              return e + 1
                            })
                          case 1:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                ),
                6e4,
              )
              return function () {
                return clearInterval(e)
              }
            }, []),
            Object(m.jsx)(Cn.Provider, {
              value: { slow: i, fast: u },
              children: t,
            })
          )
        }
      Tn.a.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 80 })
      var xn = function (e) {
        var t = e.children,
          n = e.config,
          a = Object(r.useState)(!1),
          i = Object(Lt.a)(a, 2),
          s = i[0],
          l = i[1],
          d = Object(r.useState)(void 0),
          u = Object(Lt.a)(d, 2),
          o = u[0],
          p = u[1]
        return (
          Object(r.useEffect)(
            function () {
              o && console.log('Unable to connect Wallet!', o)
            },
            [o],
          ),
          Object(m.jsx)(wt.b, {
            getLibrary: function (e) {
              return e
            },
            children: Object(m.jsx)(vn.Provider, {
              value: { open: s, setOpen: l, error: o, setError: p },
              children: Object(m.jsx)(Gt, {
                config: n,
                children: Object(m.jsxs)(Ln, {
                  children: [
                    t,
                    Object(m.jsx)(an, {
                      open: s,
                      close: function () {
                        return l(!1)
                      },
                      children: Object(m.jsx)(hn, {}),
                    }),
                  ],
                }),
              }),
            }),
          })
        )
      }
      n(111), n(294), n(295), n(296), n(62), new Tn.a(0)
      d.a.render(
        Object(m.jsx)(s.a.StrictMode, {
          children: Object(m.jsx)(xn, {
            config: {
              chainId: 97,
              supportedChainIds: [97],
              wrappedNative: { address: '', symbol: 'WBNB' },
              orange: {
                address: '0x5829ad3139496397f34d5daf2247f5640c47717f',
                symbol: 'BUSD',
              },
              usd: {
                address: '0x5829ad3139496397f34d5daf2247f5640c47717f',
                symbol: 'BUSD',
              },
              nativeUsdLp: {
                address: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
                symbol: '',
              },
            },
            children: Object(m.jsx)(Nt, {}),
          }),
        }),
        document.getElementById('root'),
      )
    },
    76: function (e, t, n) {
      e.exports = { dexs: 'styles_dexs__1yte-' }
    },
    77: function (e, t, n) {
      e.exports = {
        root: 'ModalManager_root__1k8K7',
        closeIcon: 'ModalManager_closeIcon__3PNcK',
        darkCloseIcon: 'ModalManager_darkCloseIcon__1oEkV',
        modal: 'ModalManager_modal__3Ksi6',
        darkModal: 'ModalManager_darkModal__nJ_3J',
        overlay: 'ModalManager_overlay__OW60M',
      }
    },
  },
  [[626, 1, 2]],
])
//# sourceMappingURL=main.0e39f2a5.chunk.js.map