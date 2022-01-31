export default {
    pageTitle: "Thăm quan - {map}",
    menu: {
        title: "Menu",
        tooltip: "Menu"
    },
    maps: {
        title: "Thế giới",
        button: "Thế giới",
        tooltip: "Danh sách các thế giới"
    },
    markers: {
        title: "Địa điểm",
        button: "Địa điểm",
        tooltip: "Danh sách các địa điểm",
        marker: "địa điểm | các địa điểm",
        markerSet: "cụm địa điểm | các cụm địa điểm",
        searchPlaceholder: "Tìm kiếm...",
        followPlayerTitle: "Trinh thám"
    },
    settings: {
        title: "Cài đặt",
        button: "Cài đặt"
    },
    goFullscreen: {
        button: "Toàn màn hình"
    },
    resetCamera: {
        button: "Về chỗ cũ",
        tooltip: "Về chỗ cũ"
    },
    updateMap: {
        button: "Cập nhật bản đồ",
        tooltip: "Xóa bộ nhớ đệm"
    },
    lighting: {
        title: "Ánh sáng",
        dayNightSwitch: {
            tooltip: "Ngày/Đêm"
        },
        sunlight: "Nhật quang",
        ambientLight: "Phát quang"
    },
    resolution: {
        title: "Phân giải màn hình",
        high: "Cao (SSAA, x2)",
        normal: "Thường (Native, x1)",
        low: "Thấp (Upscaling, x0.5)"
    },
    freeFlightControls: {
        title: "Điều khiển tự do",
        mouseSensitivity: "Độ nhạy điều khiển",
        invertMouseY: "Đảo chuột"
    },
    renderDistance: {
        title: "Tầm nhìn",
        hiresLayer: "Khu vực chi tiết",
        lowersLayer: "Khu vực nhỏ"
    },
    theme: {
        title: "Chủ đề",
        default: "Mặc định (Hệ thống)",
        dark: "Tối",
        light: "Sáng"
    },
    debug: {
        button: "Kiểm tra cấu hình"
    },
    resetAllSettings: {
        button: "Đặt lại cài đặt"
    },
    players: {
        title: "Danh sách người online",
        tooltip: "Danh sách người online",
    },
    compass: {
        tooltip: "La bàn / Hướng bắc"
    },
    controls: {
        title: "Camera / Điều khiển",
        perspective: {
            button: "Camera 3D",
            tooltip: "Perspective-View"
        },
        flatView: {
            button: "Camera song song",
            tooltip: "Orthographic / Flat-View",
        },
        freeFlight: {
            button: "Camera 3D tự do",
            tooltip: "Free-Flight / Spectator Mode"
        }
    },
    language: {
        title: "Ngôn ngữ",
    },
    blockTooltip: {
        block: "Khối",
        position: "Vị trí",
        chunk: "Chunk",
        region: {
            region: "Khu vực",
            file: "Tệp"
        },
        light: {
            light: "Ánh sáng",
            sun: "skylight",
            block: "emmision",
        }
    },
    info: {
        title: "Thông tin",
        button: "Thông tin",
        content: `
        <img src="assets/logo.png" style="display: block; width: 40%; margin: 3em auto; border-radius: 50%">
        <p>
            <h2>Điều khiển chuột:</h2>
            <table>
                <tr><th>move</th><td><kbd>left-click</kbd> + drag</td></tr>
                <tr><th>zoom</th><td><kbd>mousewheel</kbd> (scroll)</td></tr>
                <tr><th>rotate / tilt</th><td><kbd>right-click</kbd> + drag</td></tr>
            </table>
        </p>
        <p>
            <h2>Điều khiển bàn phím:</h2>
            <table>
                <tr><th>move</th><td><kbd>wasd</kbd> / <kbd>arrow-keys</kbd></td></tr>
                <tr><th>zoom</th><td>Numpad: <kbd>+</kbd>/<kbd>-</kbd> or <kbd>Ins</kbd>/<kbd>Home</kbd></td></tr>
                <tr><th>rotate / tilt</th><td><kbd>Left-Alt</kbd> + <kbd>wasd</kbd> / <kbd>arrow-keys</kbd> or <kbd>Delete</kbd>/<kbd>End</kbd>/<kbd>Page Up</kbd>/<kbd>Page Down</kbd></td></tr>
            </table>
        </p>
        <p>
            <h2>Điều khiển chạm:</h2>
            <table>
                <tr><th>move</th><td>touch + drag</td></tr>
                <tr><th>zoom</th><td>touch with two fingers + pinch</td></tr>
                <tr><th>rotate / tilt</th><td>touch with two fingers + rotate / move up/down</td></tr>
            </table>
        </p>
        <br><hr>
        <p>
            Sử dụng chương trình nguồn mở <a href="https://bluecolo.red/bluemap">BlueMap</a>.
        </p>
		`
    }
};
