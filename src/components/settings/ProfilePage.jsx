import React, { useState } from "react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("editProfile");

  // Preferences toggle state
  const [preferences, setPreferences] = useState({
    digitalCurrency: true,
    merchantOrder: false,
    recommendations: true,
  });

  // Security toggle state for Two-factor Authentication
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const togglePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      <div className="w-[1110px] h-[717px] bg-white shadow-md rounded-lg p-8">
        {/* Tabs */}
        <div className="flex border-b border-gray-300 mb-8">
          {["editProfile", "preferences", "security"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium ${activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "editProfile"
                ? "Edit Profile"
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "editProfile" && (
          <div className="flex gap-8 justify-between">

            <div className="flex flex-col items-center ">
              <div className="w-28 h-28 rounded-full flex relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1735230495173-acf77f646286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <button className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full">
                  <span className="text-white text-xs">✏️</span>
                </button>
              </div>
            </div>

            {/* Form */}
            <form className="grid grid-cols-2 gap-4 w-full">
              <div>
                <label className="block text-[14px] font-[400] text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  className="w-[418px] h-[50px] border rounded-[15px] px-4 py-2 text-sm"
                  defaultValue="Charlene Reed"
                />
              </div>
              <div>
                <label className="block text-[14px] font-[400] text-gray-700 mb-1">User Name</label>
                <input
                  type="text"
                  className="w-[418px] h-[50px] border rounded-[15px] px-4 py-2 text-sm"
                  defaultValue="Charlene Reed"
                />
              </div>
              <div>
                <label className="block text-[14px] font-[400] text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-[418px] h-[50px] border rounded-[15px]  px-4 py-2 text-sm"
                  defaultValue="charlenereed@gmail.com"
                />
              </div>
              <div>
                <label className="block text-[14px] font-[400] text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  className="w-[418px] h-[50px] border rounded-[15px] px-4 py-2 text-sm"
                  defaultValue="********"
                />
              </div>
              <div>
                <label className="block text-[14px] font-[400] text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  className="w-[418px] h-[50px] border rounded-[15px]  px-4 py-2 text-[15px] font-[400]"
                  defaultValue="1990-01-25"
                />
              </div>
              <div>
                <label className="block text-[14px] font-[400] text-gray-700 mb-1">Present Address</label>
                <input
                  type="text"
                  className="w-[418px] h-[50px]  border rounded-[15px]  px-4 py-2 text-[15px] font-[400]"
                  defaultValue="San Jose, California, USA"
                />
              </div>
              <div>
                <label className="block text-[14px] font-[400] text-gray-700 mb-1">Permanent Address</label>
                <input
                  type="text"
                  className="w-[418px] h-[50px] border rounded-[15px]  px-4 py-2 text-[15px] font-[400]"
                  defaultValue="San Jose, California, USA"
                />
              </div>
              <div>
                <label className="block text-[14px] font-[400] text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  className="w-[418px] h-[50px] border rounded-[15px]  px-4 py-2 text-[15px] font-[400]"
                  defaultValue="San Jose"
                />
              </div>
              <div>
                <label className="block text-[14px] font-[400] text-gray-700 mb-1">Postal Code</label>
                <input
                  type="text"
                  className="w-[418px] h-[50px] border rounded-[15px] px-4 py-2 text-[15px] font-[400]"
                  defaultValue="45962"
                />
              </div>
              <div>
                <label className="block text-[14px] font-[400] text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  className="w-[418px] h-[50px] border rounded-[15px]  px-4 py-2 text-[15px] font-[400]"
                  defaultValue="USA"
                />
              </div>
            </form>
          </div>
        )}

        {activeTab === "preferences" && (
          <div>
            {/* Preferences Form */}
            <form className="grid grid-cols-2 gap-6">
              {/* Currency */}
              <div>
                <label className="block text-[14px] font-[400] text-gray-700 mb-1">Currency</label>
                <input
                  type="text"
                  className="w-[510px] h-[50px] border rounded-[15px]  px-4 py-2 text-[15px] font-[400]"
                  defaultValue="USD"
                />
              </div>
              {/* Time Zone */}
              <div>
                <label className="block text-[16px] font-[400] text-gray-700 mb-1">Time Zone</label>
                <input
                  type="text"
                  className="w-[510px] h-[50px] border rounded-[15px]  px-4 py-2 text-[15px] font-[400]"
                  defaultValue="(GMT-12:00) International Date Line West"
                />
              </div>
              {/* Notifications */}
              <div className="col-span-2">
                <label className="block text-[17px] font-[400] text-gray-700 mb-4">Notification</label>
                <div className="flex flex-col space-y-4">
                  {/* Toggle 1 */}
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-6 rounded-full cursor-pointer transition ${preferences.digitalCurrency ? "bg-blue-500" : "bg-gray-300"
                        }`}
                      onClick={() => togglePreference("digitalCurrency")}
                    >
                      <div
                        className={`w-6 h-6 bg-white rounded-full transition transform ${preferences.digitalCurrency ? "translate-x-6" : "translate-x-0"
                          }`}
                      ></div>
                    </div>
                    <span className="ml-4 text-sm text-gray-700">
                      I send or receive digital currency
                    </span>
                  </div>
                  {/* Toggle 2 */}
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-6 rounded-full cursor-pointer transition ${preferences.merchantOrder ? "bg-blue-500" : "bg-gray-300"
                        }`}
                      onClick={() => togglePreference("merchantOrder")}
                    >
                      <div
                        className={`w-6 h-6 bg-white rounded-full transition transform ${preferences.merchantOrder ? "translate-x-6" : "translate-x-0"
                          }`}
                      ></div>
                    </div>
                    <span className="ml-4 text-sm text-gray-700">
                      I receive merchant orders
                    </span>
                  </div>
                  {/* Toggle 3 */}
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-6 rounded-full cursor-pointer transition ${preferences.recommendations ? "bg-blue-500" : "bg-gray-300"
                        }`}
                      onClick={() => togglePreference("recommendations")}
                    >
                      <div
                        className={`w-6 h-6 bg-white rounded-full transition transform ${preferences.recommendations ? "translate-x-6" : "translate-x-0"
                          }`}
                      ></div>
                    </div>
                    <span className="ml-4 text-sm text-gray-700">
                      There are recommendations for my account
                    </span>
                  </div>
                </div>
                <div className="mt-6 p-5 flex items-center justify-end">
                  <button className="bg-[#1814F3] w-[190px] h-[50px] text-white font-medium rounded-full px-8 py-3">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {activeTab === "security" && (
          <div>
            <h2 className="text-lg font-bold text-gray-700">Security</h2>
            {/* Two-factor Authentication Toggle */}
            <div className="flex items-center mt-4">
              <div
                className={`w-12 h-6 rounded-full cursor-pointer transition ${twoFactorAuth ? "bg-blue-500" : "bg-gray-300"
                  }`}
                onClick={() => setTwoFactorAuth(!twoFactorAuth)}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full transition transform ${twoFactorAuth ? "translate-x-6" : "translate-x-0"
                    }`}
                ></div>
              </div>
              <span className="ml-4 text-sm text-gray-700">
                Enable or disable two-factor authentication
              </span>
            </div>

            {/* Change Password */}
            <div className="mt-6">
              <h3 className="text-md font-semibold text-gray-700">Change Password</h3>
              <form className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Current Password</label>
                  <input
                    type="password"
                    className="w-[510px] h-[50px] border rounded-[15px] px-4 py-2 text-sm"
                    placeholder="Current Password"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">New Password</label>
                  <input
                    type="password"
                    className="w-[510px] h-[50px] border rounded-[15px] px-4 py-2 text-sm"
                    placeholder="New Password"
                  />
                </div>
                <div className="mt-6 p-5 flex items-center justify-end">
                  <button className="bg-[#1814F3] w-[190px] h-[50px] text-white font-medium rounded-full px-8 py-3">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Save Button */}
        {activeTab === "editProfile" && (
          <div className="mt-6 p-5 flex items-center justify-end">
            <button className="bg-[#1814F3] w-[190px] h-[50px] text-white font-medium rounded-full px-8 py-3">
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
