// Danh sách lá bài tarot với thông tin chi tiết
const tarotCards = [
    { name: "fool", image: "images/fool.jpg", meaning: "Nếu bạn đang cảm thấy bị mắc kẹt trong một tình huống, The Fool nhắc nhở bạn rằng sự thay đổi là cần thiết. Đừng sợ thất bại, vì bạn có thể học hỏi từ nó và tiến xa hơn. Hãy đặt niềm tin vào bản thân và những người xung quanh." },
    { name: "magician", image: "images/magician.jpg", meaning: "Khi lá bài này xuất hiện, bạn đang ở thời điểm rất thuận lợi để khai thác hết khả năng sáng tạo và tài năng tiềm ẩn. Đây là thời gian lý tưởng để bắt tay vào những dự án mới, khai phá những cơ hội mà trước đây bạn chưa dám thử." },
    { name: "high_priestess", image: "images/high_priestess.jpg", meaning: "Khi The High Priestess xuất hiện, đây là lúc bạn cần tin tưởng vào những cảm xúc, linh cảm và trực giác của mình. Hãy tìm cách kết nối sâu sắc hơn với thế giới nội tâm và dành thời gian để suy ngẫm về những gì bạn muốn thực sự đạt được trong cuộc sống." },
    { name: "empress", image: "images/empress.jpg", meaning: "The Empress là biểu tượng của sự nuôi dưỡng, không chỉ về mặt thể chất mà còn cả tinh thần. Cô ấy khuyến khích bạn chăm sóc bản thân và những người thân yêu của mình, cũng như tìm cách nuôi dưỡng những điều tích cực trong cuộc sống của bạn. Hãy tạo ra một môi trường hài hòa để sự sáng tạo của bạn có thể phát triển mạnh mẽ." },
    { name: "emperor", image: "images/emperor.jpg", meaning: "The Emperor yêu cầu bạn giữ vững nguyên tắc và có cái nhìn chiến lược trong mọi tình huống. Nếu bạn cảm thấy mất kiểm soát, lá bài này nhắc nhở bạn rằng cần phải xác định lại các mục tiêu và xây dựng một kế hoạch rõ ràng để đạt được chúng." },
    { name: "hierophant", image: "images/hierophant.jpg", meaning: "Nếu bạn đang đối mặt với sự không chắc chắn, lá bài này khuyến khích bạn quay trở lại với những nguyên tắc cơ bản và học hỏi từ những nguồn tài liệu hoặc người có kinh nghiệm. Bạn cũng có thể tìm thấy sự an toàn và ổn định trong những giá trị đã được chứng minh qua thời gian." },
    { name: "lovers", image: "images/lovers.jpg", meaning: "Khi The Lovers xuất hiện, có thể bạn sẽ phải đối diện với một quyết định quan trọng trong mối quan hệ hay cuộc sống. Lá bài này khuyến khích bạn lắng nghe trái tim mình nhưng cũng đừng quên lý trí. Nếu bạn đang tìm kiếm tình yêu, đây có thể là dấu hiệu cho thấy một mối quan hệ sâu sắc đang đến với bạn." },
    { name: "chariot", image: "images/chariot.jpg", meaning: " Khi lá bài này xuất hiện, nó cho thấy bạn đang ở một bước ngoặt quan trọng, nơi sự kiên trì và sức mạnh nội tâm sẽ giúp bạn vượt qua mọi thử thách. Đây là thời điểm để bạn chứng tỏ sức mạnh của bản thân và không bỏ cuộc, dù có gặp phải trở ngại nào." },
    { name: "strength", image: "images/strength.jpg", meaning: "Đây là một lời nhắc nhở về việc sử dụng sức mạnh tinh thần để đối mặt với những thử thách trong cuộc sống. Sự kiểm soát cảm xúc và khả năng đối phó với căng thẳng sẽ giúp bạn vượt qua mọi điều khó khăn mà không làm tổn hại bản thân hay người khác." },
    { name: "hermit", image: "images/hermit.jpg", meaning: "Nếu bạn cảm thấy lạc lối hoặc bối rối, The Hermit là lời nhắc nhở rằng đôi khi bạn cần phải rút lui vào không gian yên tĩnh để tìm ra câu trả lời. Sự khôn ngoan và ánh sáng thật sự sẽ đến từ sự tĩnh lặng và tự tìm kiếm." },
    { name: "wheel_of_fortune", image: "images/wheel_of_fortune.jpg", meaning: "Khi Wheel of Fortune xuất hiện, có thể bạn đang ở một bước ngoặt trong cuộc đời. Sự thay đổi có thể là một cơ hội tuyệt vời hoặc một thử thách khó khăn, nhưng hãy nhớ rằng mọi thứ đều có lý do của nó. Chấp nhận sự thay đổi và hãy chuẩn bị cho những điều bất ngờ." },
    { name: "justice", image: "images/justice.jpg", meaning: "Khi Justice xuất hiện, có thể bạn đang phải đối mặt với những vấn đề liên quan đến pháp lý, hợp đồng hay các quyết định đạo đức. Đây là lúc bạn cần xem xét mọi tình huống một cách khách quan và công bằng, lắng nghe cả hai phía và đưa ra quyết định sáng suốt." },
    { name: "hanged_man", image: "images/hanged_man.jpg", meaning: "The Hanged Man nhắc nhở bạn rằng đôi khi, sự thay đổi và tiến bộ chỉ có thể xảy ra khi bạn buông bỏ những ý tưởng cũ hoặc thói quen không còn phù hợp. Hãy để mình ở trong tình trạng không làm gì, và sự sáng suốt sẽ xuất hiện khi bạn ít mong đợi nhất." },
    { name: "death", image: "images/death.jpg", meaning: "Death không phải là dấu hiệu của sự kết thúc trong nghĩa đen, mà là sự kết thúc của một giai đoạn trong cuộc sống. Nó có thể chỉ ra rằng bạn cần phải buông bỏ những điều đã cũ, mệt mỏi hoặc không còn phù hợp nữa để tạo ra không gian cho sự thay đổi và phát triển mới." },
    { name: "temperance", image: "images/temperance.jpg", meaning: "Khi Temperance xuất hiện, đây là lời nhắc nhở bạn hãy sống một cách cân bằng, không để công việc, gia đình hay bất cứ thứ gì chiếm hết thời gian và năng lượng của bạn. Tìm cách hòa hợp mọi thứ trong cuộc sống và luôn giữ sự điềm tĩnh khi đối mặt với thử thách." },
    { name: "devil", image: "images/devil.jpg", meaning: "The Devil nhắc nhở bạn về những sự cám dỗ và thói quen xấu có thể dẫn bạn vào một con đường không tốt. Hãy tự hỏi bản thân mình liệu bạn có đang để mình bị ảnh hưởng bởi những điều không lành mạnh hay không. Đây là thời gian để bạn thoát ra khỏi những trói buộc và tìm lại tự do cho chính mình." },
    { name: "tower", image: "images/tower.jpg", meaning: "Khi The Tower xuất hiện, có thể bạn đang ở trong một tình huống mà mọi thứ sắp sụp đổ hoặc thay đổi đột ngột. Tuy nhiên, đừng quá lo lắng vì đây là một phần của sự tiến hóa. Sau sự sụp đổ là cơ hội xây dựng lại từ những nền tảng vững chắc hơn." },
    { name: "star", image: "images/star.jpg", meaning: "Khi The Star xuất hiện, đây là thời gian để bạn phục hồi sau những khó khăn trước đó. Lá bài này nhắc nhở bạn rằng mặc dù quá khứ có thể khó khăn, nhưng bạn sẽ vượt qua và hướng tới một tương lai tươi sáng. Hãy tiếp tục đi theo con đường của mình và luôn duy trì niềm tin vào bản thân." },
    { name: "moon", image: "images/moon.jpg", meaning: "The Moon khuyến khích bạn đối mặt với những ảo tưởng hoặc sự thiếu minh bạch trong tình huống hiện tại. Đừng để cảm xúc tiêu cực chi phối bạn. Hãy để trực giác dẫn dắt và tìm cách giải quyết những mối lo ngại hoặc sự không chắc chắn đang tồn tại." },
    { name: "sun", image: "images/sun.jpg", meaning: "Khi The Sun xuất hiện, bạn đang ở trong thời điểm tuyệt vời để đạt được những điều bạn mong muốn. Đây là thời gian của sự vui vẻ, thịnh vượng và thành công. Hãy tận hưởng những thành quả của mình và mở rộng tầm nhìn để vươn tới những mục tiêu lớn hơn." },
    { name: "judgement", image: "images/judgement.jpg", meaning: "Judgement yêu cầu bạn đánh giá lại những quyết định và hành động trong quá khứ. Nếu bạn cảm thấy hối tiếc về những điều đã xảy ra, đây là thời gian để tha thứ cho chính mình và cho người khác, đồng thời nhìn nhận sự thay đổi và tiến lên." },
    { name: "world", image: "images/world.jpg", meaning: "Khi The World xuất hiện, bạn đang ở đỉnh cao của sự phát triển cá nhân. Đây là kết quả của những nỗ lực lâu dài và sự kiên trì. Bạn đã hoàn thành một vòng đời và đang chuẩn bị cho những hành trình mới, với nhiều cơ hội và khám phá phía trước." },
];

// Hàm xáo trộn mảng
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Hoán đổi vị trí
    }
}

// Xáo trộn danh sách lá bài
shuffleArray(tarotCards);

// Biến theo dõi số lượng lá bài đã lật
let flippedCount = 0;

// Lấy container chứa lá bài
const cardContainer = document.getElementById("card-container");

// Hiển thị lá bài úp
tarotCards.forEach((card) => {
    const cardElement = document.createElement("img");
    cardElement.src = "images/card_back1.jpg"; // Mặt sau của lá bài
    cardElement.alt = card.name;
    cardElement.classList.add("card");

    // Thêm sự kiện click để lật bài
    cardElement.addEventListener("click", () => flipCard(cardElement, card));

    cardContainer.appendChild(cardElement);
});

// Lấy container hiển thị phần giải nghĩa
const explanationContainer = document.getElementById("explanation-container");

// Hàm lật bài
function flipCard(cardElement, cardData) {
    // Nếu đã đạt giới hạn 3 lá bài hoặc lá bài đã lật, bỏ qua
    if (flippedCount >= 3 || cardElement.classList.contains("flipped")) {
        return;
    }

    // Thay đổi hình ảnh lá bài thành mặt trước
    cardElement.src = cardData.image;
    cardElement.classList.add("flipped");

    // Tăng số lượng lá bài đã lật
    flippedCount++;

    // Tạo phần giải thích mới
    const explanation = document.createElement("div");
    explanation.classList.add("explanation-bubble");
    explanation.textContent = `${flippedCount}. ${cardData.meaning}`;
    
    // Thêm phần giải thích vào container
    explanationContainer.appendChild(explanation);
}
