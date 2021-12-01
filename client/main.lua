local function SendAlert(text, textype, length)
    if type(text) == "table" then
        local ttext = text.text or 'Placeholder'
        local caption = text.caption or 'Placeholder'
        local ttype = textype or 'info'
        local length = length or 5000
        SendNUIMessage({
            type = ttype,
            length = length,
            text = ttext,
            caption = caption
        })
    else
        local ttype = textype or 'info'
        local length = length or 5000
        SendNUIMessage({
            type = ttype,
            length = length,
            text = text
        })
    end
end

exports('SendAlert', SendAlert)

RegisterNetEvent('mystic:notify', function(text, type, length)
    SendAlert(text, type, length)
end)

RegisterNUICallback('getNotifyConfig', function(data, cb)
    cb(json.encode(Config.Notify))
end)